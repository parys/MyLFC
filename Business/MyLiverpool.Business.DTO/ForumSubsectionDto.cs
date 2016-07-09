using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpool.Business.DTO
{
    public class ForumSubsectionDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int SubsectionId { get; set; }

        public virtual PageableData<ForumThemeMiniDto> Themes { get; set; } 
    }
}
