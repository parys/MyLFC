using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
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
        public async Task<IHttpActionResult> Create(WishDto dto)
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
        public async Task<IHttpActionResult> Delete(int? id)
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
        public async Task<IHttpActionResult> GetList(int page = 1)
        {
            var model = await _wishService.GetListAsync(page);
            return Ok(model);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get(int? wishId)
        {
            if (!wishId.HasValue)
            {
                return BadRequest();
            }
            var model = await _wishService.GetAsync(wishId.Value);
            return Ok(model);
        }

        [Route("types")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetTypes()
        {
            var model = new[]
            {
                new {id = WishType.Bug, name = WishType.Bug.ToString()},
                new {id = WishType.BugUi, name = WishType.BugUi.ToString()},
                new {id = WishType.Feature, name = WishType.Feature.ToString()},
                new {id = WishType.FeatureUi, name = WishType.FeatureUi.ToString()}
            };
            
            return Ok(model);
        }
    }
}
