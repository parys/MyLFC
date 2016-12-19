using System;

namespace MyLiverpool.Business.DtoNext
{
    public class PrivateMessageMiniDto : IDto
    {
        public int Id { get; set; }

        public int SenderId { get; set; }

        public string SenderUserName { get; set; }

        public int ReceiverId { get; set; }

        public string ReceiverUserName { get; set; }
      
        public string Title { get; set; }

        public DateTime SentTime { get; set; }

        public bool IsRead { get; set; }
    }
}
