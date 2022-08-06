using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.Comments.Queries;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;

namespace MyLfc.Web.Mvc.Controllers.Components;

public class CommentLastViewComponent : ViewComponent
{
    private readonly IDistributedCacheManager _cacheManager;
    private readonly IMediator _mediator;

    public CommentLastViewComponent(IDistributedCacheManager cache, IMediator mediator)
    {
        _cacheManager = cache;
        _mediator = mediator;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.LastComments, async () => 
            await _mediator.Send(new GetLastCommentListQuery.Request()));
        return View(result);
    }
}
