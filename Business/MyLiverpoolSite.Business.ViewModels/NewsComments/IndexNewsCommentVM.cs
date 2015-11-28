using System;
using System.Collections.Generic;
using System.Web.Mvc;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.NewsComments
{
    public class IndexNewsCommentVM
    {
        public IndexNewsCommentVM()
        {
            Children = new HashSet<IndexNewsCommentVM>();
        }
        public int Id { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public virtual User Author { get; set; }

        [AllowHtml]
        public string Message { get; set; }

        [AllowHtml]
        public string Answer { get; set; }

        public virtual ICollection<IndexNewsCommentVM> Children { get; set; }

        //    [ForeignKey("ParentId")]
        public virtual NewsComment Parent { get; set; }

     //   public int? ParentId { get; set; }

      //  public virtual NewsItem NewsItem { get; set; }

       // public int NewsItemId { get; set; }
    }
}
