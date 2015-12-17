
using System.Collections.Generic;

namespace MyLiverpoolSite.Business.ViewModels.Users
{
    public class AllPrivateMessagesVM
    {
        public List<PrivateMessageVM> SentMessages { get; set; } 
        public List<PrivateMessageVM> ReceivedMessages { get; set; } 
    }
}
