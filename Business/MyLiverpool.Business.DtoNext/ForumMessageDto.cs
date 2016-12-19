using System;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.DtoNext
{
    public class ForumMessageDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public int AuthorId { get; set; }

        public string AuthorUserName { get; set; }
 
        [Required]
        public string Message { get; set; }

        [Required]
        public DateTime LastModifiedTime { get; set; }

        [Required]
        public DateTime AdditionTime { get; set; }

        [Required]
        public int ThemeId { get; set; }

        public string Photo { get; set; }
    }
}
