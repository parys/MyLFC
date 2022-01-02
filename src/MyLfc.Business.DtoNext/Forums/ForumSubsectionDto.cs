using System.ComponentModel.DataAnnotations;

namespace MyLfc.Business.Dto.Forums
{
    public class ForumSubsectionDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int SectionId { get; set; }

     //todo   public PagedResult<ForumThemeMiniDto> Themes { get; set; }

        public int ThemesCount { get; set; }
    }
}
