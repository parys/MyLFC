using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/club")]
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class ClubController : ApiController
    {
        private readonly IClubService _clubService;

        public ClubController(IClubService clubService)
        {
            _clubService = clubService;
        }

        [Route]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> CreateAsync(ClubDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _clubService.CreateAsync(dto);
            return Ok(result);
        }

        [Route("list")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _clubService.GetListAsync(page);
            return Ok(result);
        }

        [Route]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetAsync(int id)
        {
            var result = await _clubService.GetAsync(id);
            return Ok(result);
        }

        [Route]
        [HttpPut]
        [Authorize]
        public async Task<IHttpActionResult> EditAsync(ClubDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _clubService.UpdateAsync(dto);
            return Ok(result);
        }

        [Route]
        [HttpDelete]
        [Authorize]
        public async Task<IHttpActionResult> DeleteAsync(int id)
        {
            var result = await _clubService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
