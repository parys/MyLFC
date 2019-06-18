using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Users;

namespace MyLiverpool.Web.Mvc.Controllers
{
    [Route("[controller]")]
    public class UsersController : BaseController
    {
        public async Task<IActionResult> Index(GetUserListQuery.Request request)
        {
            var users = await Mediator.Send(request);
            return View(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Detail(GetUserDetailQuery.Request request)
        {
            var user = await Mediator.Send(request);
            user.Email = string.Empty;
            user.Ip = string.Empty;

            return View(user);
        }
    }
}