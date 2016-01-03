using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/News")]
    public class ApiNewsItemsController : ApiController
    {
        private readonly INewsService _newsService;

        public ApiNewsItemsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [Route("List")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<PageableData<NewsMiniDto>> GetNewsItems(int page = 1, int? categoryId = null)
        {
            return await _newsService.GetDtoAllAsync(page, categoryId);
        }

        [Route("Info")]
        [HttpGet]
        [AllowAnonymous]
        [ResponseType(typeof(NewsItemDto))]
        public async Task<IHttpActionResult> GetNewsItem(int id)
        {
            var model = await _newsService.GetDtoAsync(id);
            return Ok(model);
        }

        [Route("Delete")]
        [HttpDelete]
        [Authorize(Roles = "NewsStart")]
        public async Task<IHttpActionResult> Delete(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }

            var result = await _newsService.DeleteAsync(id.Value, User.Identity.GetUserId<int>());
            return Json(result);
        }

        [Route("Activate")]
        [HttpPut]
        [Authorize(Roles = "NewsFull")]
        public async Task<IHttpActionResult> Activate(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _newsService.ActivateAsync(id.Value);
            return Json(result);
        }

    }
}