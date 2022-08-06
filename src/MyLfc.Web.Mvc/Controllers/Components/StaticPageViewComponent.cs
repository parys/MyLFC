using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Common.Web.DistributedCache;
using MyLfc.Common.Utilities;
using MyLfc.Data.Common;
using MyLfc.Application.Features.HelpEntities.Queries;

namespace MyLfc.Web.Mvc.Controllers.Components;

public class StaticPageViewComponent : ViewComponent
{
    private readonly IDistributedCacheManager _cacheManager;
    private readonly IMediator _mediator;

    public StaticPageViewComponent(IDistributedCacheManager cache, IMediator mediator)
    {
        _cacheManager = cache;
        _mediator = mediator;
    }

    public async Task<IViewComponentResult> InvokeAsync(HelperEntityType type)
    {
        var result = await _cacheManager.GetOrCreateStringAsync(GlobalConstants.HelperEntity + type,
            async () => (await _mediator.Send(new GetEntityQuery.Request{Type = type})).Value);
        return View(model: result);
    }
}
