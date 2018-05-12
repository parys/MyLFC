using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class CommentLastViewComponent : ViewComponent
    {
        private readonly IMemoryCache _cache;
        private readonly ICommentService _commentService;

        public CommentLastViewComponent(IMemoryCache cache, ICommentService commentService)
        {
            _cache = cache;
            _commentService = commentService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _cache.GetOrCreateAsync(CacheKeysConstants.LastComments, async x => await _commentService.GetLastListAsync());
            return View(result);
        }
    }
}
