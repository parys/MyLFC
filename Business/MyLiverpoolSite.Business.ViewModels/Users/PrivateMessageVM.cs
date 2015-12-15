using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.Users
{
    public class PrivateMessageVM
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
