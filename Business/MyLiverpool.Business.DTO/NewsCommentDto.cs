using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace MyLiverpool.Business.DTO
{
    public class NewsCommentDto : IDto
    {
        public NewsCommentDto()
        {
            Children = new HashSet<NewsCommentDto>();
        }
        public int Id { get; set; }

        //public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public string AuthorUserName { get; set; }

        public string AuthorId { get; set; }

     //   [AllowHtml]
        public string Message { get; set; }

      //  [AllowHtml]
        public string Answer { get; set; }

        public virtual ICollection<NewsCommentDto> Children { get; set; }

     //   public virtual NewsComment Parent { get; set; }
    }
}
