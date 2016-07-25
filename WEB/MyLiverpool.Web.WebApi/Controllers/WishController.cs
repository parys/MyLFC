using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Common.Utilities;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/Wish")]
    [Authorize]
    public class WishController : ApiController
    {
        private readonly IWishService _wishService;

        public WishController(IWishService wishService)
        {
            _wishService = wishService;
        }

        [Route]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> CreateAsync(WishDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var model = await _wishService.CreateAsync(dto);
            return Ok(model);
        }

        [Route]
        [HttpDelete]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> DeleteAsync(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var model = await _wishService.DeleteAsync(id.Value);
            return Ok(model);
        }


        [Route("List")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetListAsync(int page = 1, int? typeId = null, string filterText = null)
        {
            if (page < 1)
            {
                page = 1;
            }
            var model = await _wishService.GetListAsync(page, typeId, filterText);
            return Ok(model);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetAsync(int id)
        {
            if (id < 1)
            {
                return BadRequest();
            }
            var model = await _wishService.GetAsync(id);
            return Ok(model);
        }

        [Route("types")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetTypes()
        {
            var model = new[]
            {
                new {id = WishType.Bug, name = WishType.Bug.GetRussianName()},
                new {id = WishType.BugUi, name = WishType.BugUi.GetRussianName()},
                new {id = WishType.Feature, name = WishType.Feature.GetRussianName()},
                new {id = WishType.FeatureUi, name = WishType.FeatureUi.GetRussianName()}
            };
            
            return Ok(model);
        }
    }
}
