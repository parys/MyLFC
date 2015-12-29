using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.ViewModels.Forum
{
    public class ForumSubsectionVM
    {
        public ForumSubsectionVM()
        {
          //  Themes = new 
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public PageableData<ForumThemeVM> Themes { get; set; }
    }
}
