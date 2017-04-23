using System;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
{
    public class ChatMessageDto : IDto
    {
        public int Id { get; set; }

        public int AuthorId { get; set; }

        public string AuthorUserName { get; set; }

        public string Message { get; set; }

        public DateTime AdditionTime { get; set; }

        [MaxLength(15)]
        public string Ip { get; set; }
    }
}
