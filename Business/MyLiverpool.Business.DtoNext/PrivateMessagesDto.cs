using System.Collections.Generic;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Business.DtoNext
{
    public class PrivateMessagesDto : IDto
    {
        public PrivateMessagesDto()
        {
            Received = new HashSet<PrivateMessageMiniDto>();
            Sent = new HashSet<PrivateMessageMiniDto>();
        }

        public ICollection<PrivateMessageMiniDto> Received { get; set; } 
        public ICollection<PrivateMessageMiniDto> Sent { get; set; } 
    }
}
