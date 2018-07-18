using System.Collections.Generic;

namespace MyLiverpool.Business.Dto
{
    public class ForumSectionDto : IDto
    {
        public ForumSectionDto()
        {
            Subsections = new HashSet<ForumSubsectionMiniDto>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<ForumSubsectionMiniDto> Subsections { get; set; }
    }
}
