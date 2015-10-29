using System.Collections.Generic;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.News
{
    public class CreateEditNewsViewModel
    {
        public IEnumerable<NewsCategory> NewsCategories { get; set; }

        public int Id { get; set; }

        public NewsCategory NewsCategory { get; set; }

        public bool Pending { get; set; }

        public bool OnTop { get; set; }

        public bool CanCommentary { get; set; }

        public string Title { get; set; }

      //todo  [AllowHtml]
        public string Brief { get; set; }

      //  [AllowHtml]
        public string Message { get; set; }

        public string Source { get; set; }
    }
}
