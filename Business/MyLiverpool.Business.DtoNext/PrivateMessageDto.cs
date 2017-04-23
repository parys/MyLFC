using System;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
{
    public class PrivateMessageDto : IDto
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        public string Sender { get; set; }

        public int ReceiverId { get; set; }

        public string Receiver { get; set; }

        [StringLength(30)]
        public string Title { get; set; }

        [StringLength(500)]
        public string Message { get; set; }

        public DateTime SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
