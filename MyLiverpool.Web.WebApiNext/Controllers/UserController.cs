using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using System.Linq;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        
        [Route("{id:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _userService.GetUserAsync(id));
        }

        [Route("list/{dto}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> List(string dto)
        {
            if (dto == null)
            {
                return BadRequest();
            }
            UserFiltersDto obj = Newtonsoft.Json.JsonConvert.DeserializeObject<UserFiltersDto>(dto); 
            var model = await _userService.GetUsersDtoAsync(obj);
            return Ok(model);
        }

        [Route("EditRole")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.AdminStart))]
        public async Task<IActionResult> EditRole(int userId, int roleGroupId)
        {
            var result = await _userService.EditRoleGroupAsync(userId, roleGroupId);
            return Ok(result);
        }

        [Route("GetUserNames")]
        [HttpGet]
        [AllowAnonymous] //bug
        public async Task<IActionResult> GetUserNames(string typed)
        {
            var result = await _userService.GetUserNamesAsync1(typed);
         //   var userId = User.GetUserId();
         //   result = result.Where(x => x.Id != userId);
            return Ok(result);
        }

        [Route("BanUser")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.UserStart))]
        public async Task<IActionResult> BanUser(int userId, int daysCount)
        {
            var result = await _userService.BanUser(userId, daysCount);
            return Ok(result);
        }

        [Route("UnbanUser")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.UserFull))]
        public async Task<IActionResult> UnbanUser(int userId)
        {
            var result = await _userService.UnbanUser(userId);
            return Ok(result);
        }
    }
}
