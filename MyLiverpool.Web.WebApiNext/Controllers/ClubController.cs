using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages club entity.
    /// </summary>
    [Route("api/[controller]")]
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class ClubController : Controller
    {
        private readonly IClubService _clubService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="clubService"></param>
        public ClubController(IClubService clubService)
        {
            _clubService = clubService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateAsync(ClubDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _clubService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [Route("list")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _clubService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _clubService.GetAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> EditAsync(ClubDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _clubService.UpdateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _clubService.DeleteAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="typed"></param>
        /// <returns></returns>
        [Route("getClubsByName")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetClubsByNameAsync(string typed)
        {
            var result = await _clubService.GetClubsByNameAsync(typed);
            return Ok(result);
        }
    }
}
