using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/User")]
    public class ApiUserController : ApiController
    {
        private readonly IUserService _userService;

        public ApiUserController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("Info")]
        [HttpGet]
        [AllowAnonymous]
        [ResponseType(typeof(UserDto))]
        public async Task<IHttpActionResult> Get(int id)
        {
            return Ok(await _userService.GetUserProfileDtoAsync(id));
        }

        [Route("Pms")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetPms()
        {
            var model = await _userService.GetPrivateMessagesDtoAsync(User.Identity.GetUserId<int>());
            return Ok(model);
        }

        [Route("List")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> List(int page = 1)
        {
            var model = await _userService.GetUsersDtoAsync(page);
            return Ok(model);
        }

        [Route("Pm")]
        [HttpGet]
        [Authorize]
        [ResponseType(typeof(PrivateMessageDto))]
        public async Task<IHttpActionResult> Pm(int id)
        {
            var model = await _userService.GetPrivateMessageDtoAsync(id, User.Identity.GetUserId<int>());
            return Ok(model);
        }

        [Route("WritePm")]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> WritePm(PrivateMessageDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            model.SenderId = User.Identity.GetUserId<int>();
            var userName = User.Identity.Name;
            if (model.ReceiverUserName == userName)
            {
                return BadRequest();
            }
            var result = await _userService.SavePrivateMessageDtoAsync(model);
            return Ok(result);
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
        [AllowAnonymous]
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
