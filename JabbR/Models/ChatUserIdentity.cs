using System;
using System.ComponentModel.DataAnnotations;

namespace JabbR.Models
{
    [Serializable]
    public class ChatUserIdentity
    {
        [Key]
        public int Key { get; set; }

        public int UserKey { get; set; }
        public virtual ChatUser User { get; set; }

        public string Email { get; set; }
        public string Identity { get; set; }
        public string ProviderName { get; set; }

        public override int GetHashCode()
        {
            return Identity.GetHashCode() ^ ProviderName.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            if (obj == null)
                return false;

            if (Object.ReferenceEquals(this, obj))
                return true;

            if (obj is ChatUserIdentity)
            {
                var cuserid = obj as ChatUserIdentity;

                return Identity == cuserid.Identity
                    && ProviderName == cuserid.ProviderName;
            }

            return false;
        }
    }
}