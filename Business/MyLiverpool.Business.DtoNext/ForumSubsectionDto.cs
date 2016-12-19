using System.ComponentModel.DataAnnotations;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.DtoNext
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

        public virtual PageableData<ForumThemeMiniDto> Themes { get; set; }

        public int ThemesCount { get; set; }
    }
}
