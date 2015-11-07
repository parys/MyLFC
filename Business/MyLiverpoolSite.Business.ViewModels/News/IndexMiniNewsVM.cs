using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.News
{
    public class IndexMiniNewsVM
    {
        public IndexMiniNewsVM()
        {
            Children = new HashSet<NewsComment>();
        }

        public int Id { get; set; }

     //   public int OldId { get; set; }

      //  public int NewsCategoryId { get; set; }

        public virtual NewsCategory NewsCategory { get; set; }

     //   public int Year { get; set; }

    //    public int Month { get; set; }

    //    public int Day { get; set; }

        public bool CanCommentary { get; set; }

        public DateTime AdditionTime { get; set; }

        public uint NumberCommentaries { get; set; }

        public virtual User Author { get; set; }

        public string Title { get; set; }

        [AllowHtml]
        public string Brief { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public string PhotoPath { get; set; }

        public DateTime LastModified { get; set; }

        public virtual ICollection<NewsComment> Children { get; set; }
    }
}
