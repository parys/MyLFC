using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Business.DtoNext
{
    public class ChatMessageDto : IDto
    {
        public int Id { get; set; }

        public int AuthorId { get; set; }

        public virtual int Author { get; set; }

        public string Message { get; set; }

        public DateTime AdditionTime { get; set; }

        [MaxLength(15)]
        public string Ip { get; set; }
    }
}
