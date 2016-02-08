using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using MyLiverpool.Business.Resources;
using MyLiverpoolSite.Business.ViewModels.NewsComments;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.News
{
    public class IndexNewsViewModel
    {
        public IndexNewsViewModel()
        {
            Comments = new HashSet<IndexNewsCommentVM>();
        }

        public int Id { get; set; }

        public int NewsCategoryId { get; set; }

        [Display(Name = "NewsCategory", ResourceType = typeof(NewsMessages))]
        public virtual MaterialCategory NewsCategory { get; set; }

        public bool CanCommentary { get; set; }

        [Display(Name = "AdditionTime", ResourceType = typeof(NewsMessages))]
        public DateTime AdditionTime { get; set; }

        public uint NumberCommentaries { get; set; }

        [Display(Name = "Author", ResourceType = typeof(NewsMessages))]
        public virtual User Author { get; set; }

        public string Title { get; set; }

        [AllowHtml]
        public string Brief { get; set; }

        [AllowHtml]
        public string Message { get; set; }

        [Display(Name = "Reads", ResourceType = typeof(NewsMessages))]
        public int Reads { get; set; }

        [Display(Name = "Source", ResourceType = typeof(NewsMessages))]
        public string Source { get; set; }

        public DateTime LastModified { get; set; }

        public virtual ICollection<IndexNewsCommentVM> Comments { get; set; }

        public bool Pending { get; set; }
    }
}
