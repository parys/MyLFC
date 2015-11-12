using System;
using System.Collections.Generic;
using System.Web.Mvc;
using MyLiverpoolSite.Business.ViewModels.BlogComments;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.Blogs
{
    public class IndexBlogVM
    {
        public IndexBlogVM()
        {
            Children = new HashSet<IndexBlogCommentVM>();
        }

        public int Id { get; set; }

        public virtual BlogCategory BlogCategory { get; set; }

        public bool CanCommentary { get; set; }

        public DateTime AdditionTime { get; set; }

        public uint NumberCommentaries { get; set; }

        public virtual User Author { get; set; }

        public string Title { get; set; }

        [AllowHtml]
        public string Brief { get; set; }

        [AllowHtml]
        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public string PhotoPath { get; set; }

        public DateTime LastModified { get; set; }

        public virtual ICollection<IndexBlogCommentVM> Children { get; set; }
    }
}