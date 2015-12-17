using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Business.ViewModels.Resources;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.Users
{
    public class PrivateMessageVM
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        [Display(ResourceType = typeof(UsersMessages), Name = "Sender")]
        public User Sender { get; set; }

        public int ReceiverId { get; set; }

        [Display(ResourceType = typeof(UsersMessages), Name = "Receiver")]
        public User Receiver { get; set; }

        [Required]
        [StringLength(30)]
        [Display(ResourceType = typeof(CommonMessages), Name = "Title")]
        public string Title { get; set; }

        [Required]
        [StringLength(500)]
        [Display(ResourceType = typeof(CommonMessages), Name = "Message")]
        public string Message { get; set; }

        public DateTime SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
