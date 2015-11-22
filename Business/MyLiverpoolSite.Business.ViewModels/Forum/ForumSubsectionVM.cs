using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.ViewModels.Forum
{
    public class ForumSubsectionVM
    {
        public ForumSubsectionVM()
        {
          //  Themes = new 
        }

        public PageableData<ForumThemeVM> Themes { get; set; }
    }
}
