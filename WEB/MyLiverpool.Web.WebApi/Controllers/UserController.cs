using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Script.Serialization;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("Info")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get(int id)
        {
            return Ok(await _userService.GetUserProfileDtoAsync(id));
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> List(string dto)
        {
            if (dto == null)
            {
                return BadRequest();
            }
            UserFiltersDto obj = new JavaScriptSerializer().Deserialize<UserFiltersDto>(dto);
            var model = await _userService.GetUsersDtoAsync(obj);
            return Ok(model);
        }

        [Route("EditRole")]
        [HttpPut]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> EditRole(int userId, int roleGroupId)
        {
            var result = await _userService.EditRoleGroupAsync(userId, roleGroupId);
            return Ok(result);
        } 

        [Route("GetUnreadPmCount")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetUnreadPmCount()
        {
            var result = await _userService.GetUnreadPmCountAsync(User.Identity.GetUserId<int>());
            return Ok(result);
        } 

        [Route("GetUserNames")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetUserNames(string typed)
        {
            var result = await _userService.GetUserNamesAsync(typed);
            var userName = User.Identity.Name;
            result = result.Where(x => x != userName);
            return Ok(result);
        }

        [Route("BanUser")]
        [HttpPut]
        [Authorize(Roles = "UsersStart")]
        public async Task<IHttpActionResult> BanUser(int userId, int daysCount)
        {
            var result = await _userService.BanUser(userId, daysCount);
            return Ok(result);
        }

        [Route("UnbanUser")]
        [HttpPut]
        [Authorize(Roles = "UsersFull")]
        public async Task<IHttpActionResult> UnbanUser(int userId)
        {
            var result = await _userService.UnbanUser(userId);
            return Ok(result);
        }
    }
}
