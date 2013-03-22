using System;
using System.Collections.Generic;
using System.IO.Compression;
using System.IO.IsolatedStorage;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Threading;
using JabbR.Infrastructure;
using JabbR.Models;

namespace JabbR.Services
{
    public class CustomRepository : IJabbrRepository
    {
        private const string _usersFileName = "users.dat.gz";
        private const string _roomsFileName = "rooms.dat.gz";
        private const string _identitiesFileName = "identities.dat.gz";

        private readonly ReaderWriterLockSlim _storageLock = new ReaderWriterLockSlim();

        private readonly ICollection<ChatUser> _users;
        private readonly ICollection<ChatRoom> _rooms;
        private readonly ICollection<ChatUserIdentity> _identities;

        private DateTime _lastPurge;

        public CustomRepository()
        {
            _users = new SafeCollection<ChatUser>();
            _rooms = new SafeCollection<ChatRoom>();
            _identities = new SafeCollection<ChatUserIdentity>();

            LoadCollectionFromStorage(_users, _usersFileName);
            LoadCollectionFromStorage(_rooms, _roomsFileName);
            LoadCollectionFromStorage(_identities, _identitiesFileName);
        }

        public IQueryable<ChatRoom> Rooms { get { return _rooms.AsQueryable(); } }

        public IQueryable<ChatUser> Users { get { return _users.AsQueryable(); } }

        public void Add(ChatRoom room)
        {
            _rooms.Add(room);
        }

        public void Add(ChatUser user)
        {
            _users.Add(user);
        }

        public void Add(ChatUserIdentity identity)
        {
            _identities.Add(identity);
            if (identity.User != null)
            {
                identity.User.Identities.Add(identity);
            }
        }

        public void Add(ChatMessage message)
        {
            // There's no need to keep a collection of messages outside of a room
            var room = _rooms.First(r => r == message.Room);
            room.Messages.Add(message);
        }

        public void Add(ChatClient client)
        {
            var user = _users.FirstOrDefault(u => client.User == u);
            user.ConnectedClients.Add(client);
        }

        public void Remove(ChatClient client)
        {
            var user = _users.FirstOrDefault(u => client.User == u);
            user.ConnectedClients.Remove(client);
        }

        public void Remove(ChatRoom room)
        {
            _rooms.Remove(room);
        }

        public void Remove(ChatUser user)
        {
            _users.Remove(user);
        }

        public void Remove(ChatUserIdentity identity)
        {
            _identities.Remove(identity);
        }

        public void CommitChanges()
        {
            PurgeMessagesIfNecessary();

            SaveCollectionToStorage(_users, _usersFileName);
            SaveCollectionToStorage(_rooms, _roomsFileName);
            SaveCollectionToStorage(_identities, _identitiesFileName);
        }

        public void Dispose()
        {
        }

        public ChatUser GetUserById(string userId)
        {
            return _users.FirstOrDefault(u => u.Id != null && u.Id.Equals(userId, StringComparison.OrdinalIgnoreCase));
        }

        public ChatUser GetUserByName(string userName)
        {
            return _users.FirstOrDefault(u => u.Name != null && u.Name.Equals(userName, StringComparison.OrdinalIgnoreCase));
        }

        public ChatRoom GetRoomByName(string roomName)
        {
            return _rooms.FirstOrDefault(r => r.Name != null && r.Name.Equals(roomName, StringComparison.OrdinalIgnoreCase));
        }

        public ChatRoom GetRoomByName(string roomName, bool includeUsers = false, bool includeOwners = false)
        {
            return GetRoomByName(roomName);
        }

        public ChatRoom GetRoomAndUsersByName(string roomName)
        {
            return GetRoomByName(roomName);
        }

        public IQueryable<ChatRoom> GetAllowedRooms(ChatUser user)
        {
            return _rooms
                .Where(r =>
                    (!r.Private) ||
                    (r.Private && r.AllowedUsers.Contains(user)))
                .AsQueryable();
        }

        public IQueryable<ChatMessage> GetMessagesByRoom(ChatRoom room)
        {
            return room.Messages.AsQueryable();
        }

        public IQueryable<ChatUser> GetOnlineUsers(ChatRoom room)
        {
            return room.Users.Online().AsQueryable();
        }

        public IQueryable<ChatUser> GetOnlineUsers()
        {
            return _users.Online().AsQueryable();
        }

        public IQueryable<ChatUser> SearchUsers(string name)
        {
            return _users.Online()
                         .Where(u => u.Name.IndexOf(name, StringComparison.OrdinalIgnoreCase) != -1)
                         .AsQueryable();
        }

        public ChatUser GetUserByClientId(string clientId)
        {
            return _users.FirstOrDefault(u => u.ConnectedClients.Any(c => c.Id == clientId));
        }

        public ChatUser GetUserByLegacyIdentity(string userIdentity)
        {
            return _users.FirstOrDefault(u => u.Identity == userIdentity);
        }

        public ChatUser GetUserByIdentity(string providerName, string userIdentity)
        {
            var identity = _identities.FirstOrDefault(u => u.Identity == userIdentity && u.ProviderName == providerName);
            if (identity != null)
            {
                return identity.User;
            }
            return null;
        }

        public ChatClient GetClientById(string clientId, bool includeUser = false)
        {
            return _users.SelectMany(u => u.ConnectedClients).FirstOrDefault(c => c.Id == clientId);
        }

        public IQueryable<ChatMessage> GetPreviousMessages(string messageId)
        {
            // Ineffcient since we don't have a messages collection

            return (from r in _rooms
                    let message = r.Messages.FirstOrDefault(m => m.Id == messageId)
                    where message != null
                    from m in r.Messages
                    where m.When < message.When
                    select m).AsQueryable();
        }

        public void RemoveAllClients()
        {
            foreach (var user in _users)
                user.ConnectedClients.Clear();
        }

        public ChatMessage GetMessageById(string id)
        {
            return (from r in _rooms
                    let message = r.Messages.FirstOrDefault(m => m.Id == id)
                    where message != null
                    select message).FirstOrDefault();
        }

        public bool IsUserInRoom(ChatUser user, ChatRoom room)
        {
            // REVIEW: Inefficient, bu only users for unit tests right now
            return room.Users.Any(u => u.Name == user.Name);
        }

        public void AddUserRoom(ChatUser user, ChatRoom room)
        {
            user.Rooms.Add(room);

            room.Users.Add(user);
        }

        public void RemoveUserRoom(ChatUser user, ChatRoom room)
        {
            user.Rooms.Remove(room);

            room.Users.Remove(user);
        }

        public void Reload(object entity)
        {
        }

        private void PurgeMessagesIfNecessary()
        {
            var currentDate = DateTime.Now;

            if (currentDate.Subtract(_lastPurge).TotalHours > 1d)
            {
                PurgeMessages();

                _lastPurge = currentDate;
            }
        }
        private void PurgeMessages()
        {
            foreach (var room in _rooms)
            {
                PurgeMessages(room);
            }
        }
        private void PurgeMessages(ChatRoom room)
        {
            var messagesToKeep = room.Messages.OrderByDescending(m => m.When).Take(100).ToList();

            room.Messages.Clear();

            foreach (var msg in messagesToKeep)
            {
                room.Messages.Add(msg);
            }
        }

        private void LoadCollectionFromStorage<T>(ICollection<T> collection, string fileName)
            where T : class
        {
            _storageLock.EnterReadLock();
            try
            {
                using (var storage = IsolatedStorageFile.GetMachineStoreForAssembly())
                {
                    if (storage.FileExists(fileName))
                    {
                        using (var collectionFile = new GZipStream(storage.OpenFile(fileName, System.IO.FileMode.Open), CompressionMode.Decompress))
                        {
                            var formatter = new BinaryFormatter();

                            var savedCollection = formatter.Deserialize(collectionFile) as ICollection<T>;

                            if (savedCollection != null)
                            {
                                foreach (var item in savedCollection)
                                    collection.Add(item);
                            }
                        }
                    }
                }
            }
            finally
            {
                _storageLock.ExitReadLock();
            }
        }
        private void SaveCollectionToStorage<T>(ICollection<T> collection, string fileName)
            where T : class
        {
            _storageLock.EnterWriteLock();
            try
            {
                using (var storage = IsolatedStorageFile.GetMachineStoreForAssembly())
                {
                    using (var collectionFile = new GZipStream(storage.OpenFile(fileName, System.IO.FileMode.Create), CompressionMode.Compress))
                    {
                        var formatter = new BinaryFormatter();

                        formatter.Serialize(collectionFile, collection);

                        collectionFile.Flush();
                    }
                }
            }
            finally
            {
                _storageLock.ExitWriteLock();
            }
        }
    }
}