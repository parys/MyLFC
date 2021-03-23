using System.Collections.Generic;

namespace MyLiverpool.Business.Dto.Forums
{
    public class ForumSectionDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<ForumSubsectionMiniDto> Subsections { get; set; } = new HashSet<ForumSubsectionMiniDto>();
    }
}
