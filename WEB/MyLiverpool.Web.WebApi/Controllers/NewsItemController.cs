using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/News")]
    public class NewsItemsController : ApiController
    {
        private readonly IMaterialService _materialService;
        private const MaterialType Type = MaterialType.News;

        public NewsItemsController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetNewsItems(int page = 1, int? categoryId = null, string authorUserName = null)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _materialService.GetDtoAllAsync(page, categoryId, authorUserName, Type);
            return Ok(result);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetNewsItem(int id)
        {
            var model = await _materialService.GetDtoAsync(id, Type);
            return Ok(model);
        }

        [Route]
        [HttpDelete]
        [Authorize(Roles = "NewsStart")]
        public async Task<IHttpActionResult> Delete(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }

            var result = await _materialService.DeleteAsync(id.Value, User.Identity.GetUserId<int>(), Type);
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
            var result = await _materialService.ActivateAsync(id.Value, Type);
            return Json(result);
        }

        [Route]
        [HttpPost]
        [Authorize(Roles = "NewsStart")]
        public async Task<IHttpActionResult> Create(MaterialDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!User.IsInRole(RolesEnum.NewsFull.ToString()))
            {
                model.Pending = true;
            }
            var result = await _materialService.CreateAsync(model, User.Identity.GetUserId<int>(), Type);
            return Ok(result);
        }

        [Route]
        [HttpPut]
        [Authorize(Roles = "NewsStart")]
        public async Task<IHttpActionResult> Update(MaterialDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            if (!User.IsInRole(RolesEnum.NewsFull.ToString()))
            {
                if (model.AuthorId != User.Identity.GetUserId<int>())
                {
                    return Unauthorized();
                }
                model.Pending = true;
            }
            var result = await _materialService.EditAsync(model, User.Identity.GetUserId<int>(), Type);
            return Ok(result);
        }

        [Route("AddView")]
        [HttpPut]
        [AllowAnonymous]
        public async Task<IHttpActionResult> AddView(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _materialService.AddViewAsync(id.Value, Type);
            return Ok(result);
        }
    }
}