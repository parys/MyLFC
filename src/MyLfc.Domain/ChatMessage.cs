using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpool.Data.Common;

namespace MyLfc.Domain
{
    public class ChatMessage : IEntity
    {
        public int Id { get; set; }

        public int AuthorId { get; set; }

        public User Author { get; set; }

        public string Message { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        [MaxLength(15)]
        public string Ip { get; set; }

        public ChatMessageTypeEnum Type { get; set; }
    }
}
