using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class NewsCategory
    {
        public NewsCategory()
        {
            NewsItems = new List<NewsItem>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

        public int Position { get; set; }

        public int ItemsCount { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UrlPath { get; set; }

        public List<NewsItem> NewsItems { get; set; } 
    }
}
