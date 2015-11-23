using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.Forum
{
    public class ForumMessageVM
    {
        public int Id { get; set; }
        public User Author { get; set; }
        public string Message { get; set; }
    }
}
