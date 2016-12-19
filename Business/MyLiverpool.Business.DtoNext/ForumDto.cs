using System.Collections.Generic;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Business.DTO
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
