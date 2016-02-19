using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

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
            var result = await _userService.SavePrivateMessageDtoAsync(model);
            return Ok(result);
        }

        [Route("EditRole")]
        [HttpPut]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> EditRole(int userId, int roleGroupId)
        {
            var result = await _userService.EditRoleGroup(userId, roleGroupId);
            return Ok(result);
        } 
    }
}
