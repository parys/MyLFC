using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyLiverpoolSite.Data.Entities
{
    public class NewsComment
    {
        public NewsComment()
        {
            Children = new HashSet<NewsComment>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public virtual User Author { get; set; }

        public int AuthorId { get; set; }

        public string Message { get; set; }

        public string Answer { get; set; }

        public virtual ICollection<NewsComment> Children { get; set; }

    //    [ForeignKey("ParentId")]
        public virtual NewsComment Parent { get; set; }

        public int? ParentId { get; set; }

        public virtual NewsItem NewsItem { get; set; }

        public int NewsItemId { get; set; }
    }
}
