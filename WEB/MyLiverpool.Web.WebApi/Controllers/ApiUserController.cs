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
            return Ok(await _userService.GetUserProfileDto(id));
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
            var model = await _userService.GetPrivateMessageDto(id, User.Identity.GetUserId<int>());
            return Ok(model);
        }
    }
}
