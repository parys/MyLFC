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
        public async Task<IHttpActionResult> GetListAsync(int page = 1, int? typeId = null)
        {
            var model = await _wishService.GetListAsync(page, typeId);
            return Ok(model);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetAsync(int? wishId)
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
                new {id = WishType.Bug, name = GetRussianName(WishType.Bug)},
                new {id = WishType.BugUi, name = GetRussianName(WishType.BugUi)},
                new {id = WishType.Feature, name = GetRussianName(WishType.Feature)},
                new {id = WishType.FeatureUi, name = GetRussianName(WishType.FeatureUi)}
            };
            
            return Ok(model);
        }

        private string GetRussianName(WishType type)
        {
            switch (type)
            {
                case WishType.Bug:
                    return "Баг";
                case WishType.BugUi:
                    return "Баг оформления";
                case WishType.Feature:
                    return "Пожелание";
                case WishType.FeatureUi:
                    return "Пожелание оформления";
            }
            return string.Empty;
        }
    }
}
