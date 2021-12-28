using System.Collections.Generic;

namespace MyLfc.Business.Dto.Forums
{
    public class ForumDto : IDto
    {
        public ForumDto()
        {
            Sections = new HashSet<ForumSectionDto>();
        }

        public ICollection<ForumSectionDto> Sections { get; set; } 
    }
}
