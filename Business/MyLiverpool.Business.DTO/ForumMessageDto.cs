using System;
using System.Web.Mvc;

namespace MyLiverpool.Business.DTO
{
    public class ForumMessageDto : IDto
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public string AuthorUserName { get; set; }

        [AllowHtml] 
        public string Message { get; set; }

        public DateTime LastModifiedTime { get; set; }
        public DateTime AdditionTime { get; set; }

        public int ThemeId { get; set; }
    }
}
