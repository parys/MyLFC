using System;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class MaterialMiniDto : IDto
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public bool CanCommentary { get; set; }

        public bool Pending { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public int CommentsCount { get; set; }

        public string UserName { get; set; }

        public int UserId { get; set; }

        public string Title { get; set; }
        
        public string Brief { get; set; }

        public int Reads { get; set; }

        //     public string Source { get; set; }

        public string Photo { get; set; }

        public MaterialType Type { get; set; }

        //   public DateTime LastModified { get; set; }
    }
}
