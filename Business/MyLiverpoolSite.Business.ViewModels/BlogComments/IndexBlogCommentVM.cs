using System;
using System.Collections.Generic;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.BlogComments
{
    public class IndexBlogCommentVM
    {
        public IndexBlogCommentVM()
        {
            Children = new HashSet<IndexBlogCommentVM>();
        }
        public int Id { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public virtual User Author { get; set; }

        public string Message { get; set; }

        public string Answer { get; set; }

        public virtual ICollection<IndexBlogCommentVM> Children { get; set; }
    }
}
