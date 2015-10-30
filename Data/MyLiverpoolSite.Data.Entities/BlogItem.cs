using System.Collections.Generic;
using System.Web.Mvc;

namespace MyLiverpoolSite.Data.Entities
{
    public class BlogItem
    {
        public BlogItem()
        {
            Comments = new HashSet<Comment>();
        }
        public int Id { get; set; }

        public int OldId { get; set; }

        public int CategoryId { get; set; }

        public virtual BlogCategory BlogCategory { get; set; }

        public int Year { get; set; }

        public int Month { get; set; }

        public int Day { get; set; }

        public bool Pending { get; set; }

        public bool OnTop { get; set; }

        public bool CanCommentary { get; set; }

        public long AdditionTime { get; set; }

        public int NumberCommentaries { get; set; }

        public virtual User User { get; set; }

        public string Title { get; set; }
         
        [AllowHtml]
        public string Brief { get; set; }

        [AllowHtml]
        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public float Rating { get; set; }

        public int RatingNumbers { get; set; }

        public int RatingSumm { get; set; }

        public string PhotoPath { get; set; }

        public long LastModifiedUtc { get; set; }

        public virtual ICollection<Comment> Comments { get; set; } 
    }
}
