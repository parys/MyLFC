using System;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Entities
{
    public class ChatMessage : IEntity
    {
        public int Id { get; set; }

        public int AuthorId { get; set; }

        public virtual User Author { get; set; }

        public string Message { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        [MaxLength(15)]
        public string Ip { get; set; }
    }
}
