using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class CommentLastViewComponent : ViewComponent
    {
        private readonly IDistributedCacheManager _cacheManager;
        private readonly ICommentService _commentService;

        public CommentLastViewComponent(IDistributedCacheManager cache, ICommentService commentService)
        {
            _cacheManager = cache;
            _commentService = commentService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.LastComments, async () => 
                await _commentService.GetLastListAsync());
            return View(result);
        }
    }
}
