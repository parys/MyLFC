using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers
{
    [Area("lite")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public async Task<IActionResult> Detail(int id)
        {
            if (id == 0)
            {
                id = User?.GetUserId() ?? 0;
            }
            if (id == 0)
            {
                return BadRequest();
            }
            var user = await _userService.GetUserAsync(id);
            if (User == null || !User.Identity.IsAuthenticated ||
                (!User.IsInRole(nameof(RolesEnum.AdminStart)) && User.GetUserId() != user.Id))
            {
                user.Email = null;
                user.Ip = null;
            }
            return View(user);
        }
    }
}