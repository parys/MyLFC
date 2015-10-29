using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class NewsComment
    {
        public NewsComment()
        {
            Comments = new List<NewsComment>();
        }

        public long Id { get; set; }

        public int OldId { get; set; }

        public long MaterialId { get; set; }

        public bool Pending { get; set; }

        public long AdditionTime { get; set; }

        public User Author { get; set; }

        public string Message { get; set; }

        public string Answer { get; set; }

        public List<NewsComment> Comments { get; set; }

        public long ParentCommentId { get; set; }

        public NewsItem NewsItem { get; set; }  
    }
}
