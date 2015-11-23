using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.ViewModels.Forum
{
    public class ForumThemeVM
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public PageableData<ForumMessageVM> Messages { get; set; }  
    }
}
