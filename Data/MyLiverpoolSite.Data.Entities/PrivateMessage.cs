using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyLiverpoolSite.Data.Entities
{
    public class PrivateMessage : IEntity
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        [ForeignKey("SenderId")]
        public User Sender { get; set; }

        public int ReceiverId { get; set; }

        [ForeignKey("ReceiverId")]
        public User Receiver { get; set; }

        [StringLength(30)]
        public string Title { get; set; }

        [StringLength(500)]
        public string Message { get; set; }

        public DateTime SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
