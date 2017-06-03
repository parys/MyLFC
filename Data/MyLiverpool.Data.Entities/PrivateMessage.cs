using System;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Entities
{
    public class PrivateMessage : IEntity
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        public virtual User Sender { get; set; }

        public int ReceiverId { get; set; }

        public virtual User Receiver { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(2500)]
        public string Message { get; set; }

        public DateTimeOffset SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
