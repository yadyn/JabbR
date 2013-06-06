using System;
using System.ComponentModel.DataAnnotations;

namespace JabbR.Models
{
    [Serializable]
    public class Settings
    {
        [Key]
        public int Key { get; set; }
        public string RawSettings { get; set; }
    }
}