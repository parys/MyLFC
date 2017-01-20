using System;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.DtoNext
{
    public class MaterialDto : IDto
    {
        public MaterialDto()
        {
        }

        public int Id { get; set; }

        public int CategoryId { get; set; }
      
        public string CategoryName { get; set; }

        public DateTime? AdditionTime { get; set; }

        public int CommentsCount { get; set; }

        public int AuthorId { get; set; }

        public string Username { get; set; }

        public string Title { get; set; }

       // [AllowHtml]
        public string Brief { get; set; }

       // [AllowHtml]
        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public string Photo { get; set; }
        
        public bool Pending { get; set; }

        public bool OnTop { get; set; }

        public bool CanCommentary { get; set; }

        public MaterialType Type { get; set; }
    }
}
