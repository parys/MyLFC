using System;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Business.DtoNext
{
    public class MaterialMiniDto : IDto
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        //   public bool CanCommentary { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public int CommentsCount { get; set; }

        public string AuthorUserName { get; set; }

        public int AuthorId { get; set; }

        public string Title { get; set; }

     //   [AllowHtml]
        public string Brief { get; set; }

        public int Reads { get; set; }

        //     public string Source { get; set; }

        public string PhotoPath { get; set; }

        //   public DateTime LastModified { get; set; }
    }
}
