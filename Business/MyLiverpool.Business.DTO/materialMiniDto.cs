using System;
using System.Web.Mvc;

namespace MyLiverpool.Business.DTO
{
    public class MaterialMiniDto : IDto
    {
        public int Id { get; set; }

        public int NewsCategoryId { get; set; }
        public string NewsCategoryName { get; set; }

        //   public bool CanCommentary { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public int CommentsCount { get; set; }

        public string AuthorUserName { get; set; }

        public int AuthorId { get; set; }

        public string Title { get; set; }

        [AllowHtml]
        public string Brief { get; set; }

        public int Reads { get; set; }

        //     public string Source { get; set; }

        public string PhotoPath { get; set; }

        //   public DateTime LastModified { get; set; }
    }
}
