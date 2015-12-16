using System;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpoolSite.Data.Entities
{
    public class PrivateMessage : IEntity
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        public User Sender { get; set; }

        public int ReceiverId { get; set; }

        public User Receiver { get; set; }

        [StringLength(30)]
        public string Title { get; set; }

        [StringLength(500)]
        public string Message { get; set; }

        public DateTime SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
