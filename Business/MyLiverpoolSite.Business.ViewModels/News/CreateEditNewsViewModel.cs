using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using MyLiverpoolSite.Business.ViewModels.Resources;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.News
{
    public class CreateEditNewsViewModel
    {
        public CreateEditNewsViewModel()
        {
            NewsCategories = new HashSet<NewsCategory>();
        }
        public ICollection<NewsCategory> NewsCategories { get; set; }

        public int Id { get; set; }

        [Display(ResourceType = typeof(NewsMessages), Name = "NewsCategory")]
        public NewsCategory NewsCategory { get; set; }

        [Display(ResourceType = typeof (NewsMessages), Name = "Pending")]
        public bool Pending { get; set; }

        [Display(ResourceType = typeof(NewsMessages), Name = "OnTop")]
        public bool OnTop { get; set; }

        [Display(ResourceType = typeof(NewsMessages), Name = "CanCommentary")]
        public bool CanCommentary { get; set; }

        [Required(ErrorMessageResourceType = typeof (ErrorMessages), ErrorMessageResourceName = "Required")]
        [Display(ResourceType = typeof(NewsMessages), Name = "Title")]
        public string Title { get; set; }

        [Required(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
        [AllowHtml]
        [Display(ResourceType = typeof(NewsMessages), Name = "Brief")]
        public string Brief { get; set; }

        [Required(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
        [AllowHtml]
        [Display(ResourceType = typeof(NewsMessages), Name = "Message")]
        public string Message { get; set; }

        [Display(ResourceType = typeof(NewsMessages), Name = "Source")]
        public string Source { get; set; }

        [Required(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
        public string PhotoPath { get; set; }

        public int NewsCategoryId { get; set; }
        
        public DateTime AdditionTime { get; set; }

        public int AuthorId { get; set; }
    }
}
