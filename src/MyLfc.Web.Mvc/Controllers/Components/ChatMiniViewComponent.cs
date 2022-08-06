using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.ChatMessages.Queries;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;
using MyLfc.Data.Common;

namespace MyLfc.Web.Mvc.Controllers.Components;

public class ChatMiniViewComponent : ViewComponent
{
    private readonly IMediator _mediator;
    private readonly IDistributedCacheManager _cacheManager;

    public ChatMiniViewComponent(IMediator mediator, IDistributedCacheManager cache)
    {
        _mediator = mediator;
        _cacheManager = cache;
    }

    public async Task<IViewComponentResult> InvokeAsync(int lastMessageId = 0)
    {
        var request = new GetChatMessageListQuery.Request
        {
            TypeId = ChatMessageTypeEnum.Mini,
            LastMessageId = lastMessageId
        };
        GetChatMessageListQuery.Response result;
        if (request.LastMessageId == 0)
        {
            result = await _cacheManager.GetOrCreateAsync(
                CacheKeysConstants.ChatName + request.TypeId,
                async () => await _mediator.Send(request));
        }
        else
        {
            result = await _mediator.Send(request);
        }
        return View(result);
    }
}
