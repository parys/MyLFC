using System;
using System.ComponentModel.DataAnnotations;

namespace MyLfc.Domain
{
    public class PrivateMessage : IEntity
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        public User Sender { get; set; }

        public int ReceiverId { get; set; }

        public User Receiver { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(2500)]
        public string Message { get; set; }

        public DateTimeOffset SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
