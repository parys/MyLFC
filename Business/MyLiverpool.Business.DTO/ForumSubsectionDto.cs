using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Business.DTO
{
    public class ForumSubsectionDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int SectionId { get; set; }

        public virtual PageableData<ForumThemeMiniDto> Themes { get; set; } 
    }
}
