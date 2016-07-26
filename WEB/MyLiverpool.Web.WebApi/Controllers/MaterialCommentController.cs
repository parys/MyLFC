using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/materialComment")]
    public class MaterialCommentController : ApiController
    {
        private readonly IMaterialCommentService _commentService;

        public MaterialCommentController(IMaterialCommentService commentService)
        {
            _commentService = commentService;
        }

        [Route("list")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetList(int page = 1, bool onlyUnverified = true)
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
        public async Task<IHttpActionResult> VerifyAsync(int? id)
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
