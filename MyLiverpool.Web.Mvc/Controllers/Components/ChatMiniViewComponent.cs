using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class ChatMiniViewComponent : ViewComponent
    {
        private readonly IChatMessageService _chatMessageService;
        private readonly IDistributedCacheManager _cacheManager;

        public ChatMiniViewComponent(IChatMessageService chatMessageService, IDistributedCacheManager cache)
        {
            _chatMessageService = chatMessageService;
            _cacheManager = cache;
        }

        public async Task<IViewComponentResult> InvokeAsync(int lastMessageId = 0)
        {
            IEnumerable<ChatMessageDto> result;
            if (lastMessageId == 0)
            {
                result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.ChatName + (int)ChatMessageTypeEnum.Mini,
                    async () => await _chatMessageService.GetListAsync(lastMessageId, ChatMessageTypeEnum.Mini));
            }
            else
            {
                result = await _chatMessageService.GetListAsync(lastMessageId, ChatMessageTypeEnum.Mini);
            }
            if (!User.IsInRole(nameof(RolesEnum.AdminStart)))
            {
                foreach (var messageDto in result)
                {
                    messageDto.Ip = string.Empty;
                }
            }
            return View(result);
        }
    }
}
