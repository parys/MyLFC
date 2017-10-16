using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class ChatMiniViewComponent : ViewComponent
    {
        private readonly IChatMessageService _chatMessageService;

        public ChatMiniViewComponent(IChatMessageService chatMessageService)
        {
            _chatMessageService = chatMessageService;
        }

        public async Task<IViewComponentResult> InvokeAsync(int lastMessageId = 0)
        {
            var result = //await _cache.GetOrCreateAsync(ChatName + lastMessageId + typeId,
                //  async x => 
                await _chatMessageService.GetListAsync(lastMessageId, ChatMessageTypeEnum.Mini);//);
            if (!User.IsInRole(nameof(RolesEnum.AdminStart)))
            {
                foreach (var messageDto in result)
                {
                    messageDto.Ip = string.Empty;
                }
            }
            return View();
        }
    }
}
