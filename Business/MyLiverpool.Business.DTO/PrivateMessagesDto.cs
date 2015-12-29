using System.Collections.Generic;

namespace MyLiverpool.Business.DTO
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
