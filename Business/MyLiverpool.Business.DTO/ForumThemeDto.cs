using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpool.Business.DTO
{
    public class ForumThemeDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int SubsectionId { get; set; }

        public PageableData<ForumMessageDto> Messages { get;set; }
    }
}
