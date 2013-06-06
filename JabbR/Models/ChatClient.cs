using System;
using System.ComponentModel.DataAnnotations;

namespace JabbR.Models
{
    [Serializable]
    public class ChatClient
    {
        [Key]
        public int Key { get; set; }

        public string Id { get; set; }
        public ChatUser User { get; set; }

        public string UserAgent { get; set; }
        public string Name { get; set; }

        public DateTimeOffset LastActivity { get; set; }
        public DateTimeOffset LastClientActivity { get; set; }

        public int UserKey { get; set; }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            if (obj == null)
                return false;

            if (Object.ReferenceEquals(this, obj))
                return true;

            if (obj is ChatClient)
            {
                var cclient = obj as ChatClient;

                return Id == cclient.Id;
            }

            return false;
        }
    }
}