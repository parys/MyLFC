using System;
using System.Collections.Generic;

namespace MyLiverpool.Business.DTO
{
    public class NewsItemDto : IDto
    {
        public NewsItemDto()
        {
            this.Comments = new HashSet<NewsCommentDto>();
        }

        public int Id { get; set; }

        public int NewsCategoryId { get; set; }
      
        public string NewsCategoryName { get; set; }

        public bool CanCommentary { get; set; }

        public DateTime AdditionTime { get; set; }

   //     public uint NumberCommentaries { get; set; }

        public int AuthorId { get; set; }

        public string AuthorUserName { get; set; }

        public string Title { get; set; }

     //   [AllowHtml]
     //   public string Brief { get; set; }

     //   [AllowHtml]
        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

      //  public DateTime LastModified { get; set; }

        public virtual ICollection<NewsCommentDto> Comments { get; set; }

        public bool Pending { get; set; }
    }
}
