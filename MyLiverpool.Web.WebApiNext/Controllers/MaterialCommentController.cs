using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class MaterialCommentController : Controller
    {
        private readonly IMaterialCommentService _commentService;

        public MaterialCommentController(IMaterialCommentService commentService)
        {
            _commentService = commentService;
        }

        [Route("list")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetList(int page = 1, bool onlyUnverified = true)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _commentService.GetListAsync(page, onlyUnverified);
            return Ok(result);
        }

        [Route("verify")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> VerifyAsync(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _commentService.VerifyAsync(id.Value);
            return Ok(result);
        }
    }
}
