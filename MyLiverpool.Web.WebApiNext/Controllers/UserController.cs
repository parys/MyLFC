using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages users.
    /// </summary>
    [Route("api/v1/[controller]")]
    [Authorize]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="userService"></param>
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("GetId")]
        [HttpGet]
        [Authorize]
        public IActionResult GetId()
        {
            return Ok(User.GetUserId());
        }

        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _userService.GetUserAsync(id));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Updates user group.
        /// </summary>
        /// <param name="userId">The identifier of updatable user.</param>
        /// <param name="roleGroupId">New role group id.</param>
        /// <returns>Result of updating role group.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("updateRoleGroup/{userId:int}/{roleGroupId:int}")]
        public async Task<IActionResult> UpdateRole(int userId, int roleGroupId)
        {
            if (userId == User.GetUserId())
            {
                return BadRequest("Cannot update role by self.");
            }
            var result = await _userService.EditRoleGroupAsync(userId, roleGroupId);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="typed"></param>
        /// <returns></returns>
        [Route("GetUsernames")]
        [HttpGet]
        [AllowAnonymous] //bug
        public async Task<IActionResult> GetUserNames([FromQuery]string typed)
        {
            var result = await _userService.GetUserNamesAsync(typed);
         //   var userId = User.GetUserId();
         //   result = result.Where(x => x.Id != userId);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="daysCount"></param>
        /// <returns></returns>
        [Route("BanUser")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.UserStart))]
        public async Task<IActionResult> BanUser([FromQuery]int userId, [FromQuery]int daysCount)
        {
            var result = await _userService.BanUser(userId, daysCount);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [Route("UnbanUser")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.UserFull))]
        public async Task<IActionResult> UnbanUser([FromQuery]int userId)
        {
            var result = await _userService.UnbanUser(userId);
            return Ok(result);
        }
    }
}
