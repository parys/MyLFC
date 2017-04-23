using System;

namespace MyLiverpool.Business.Dto
{
    public class PrivateMessageMiniDto : IDto
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        public string Sender { get; set; }

        public int ReceiverId { get; set; }

        public string Receiver { get; set; }
      
        public string Title { get; set; }

        public DateTime SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
