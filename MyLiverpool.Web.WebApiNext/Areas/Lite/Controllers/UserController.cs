using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers
{
    [Authorize]
    [Area("lite")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<IActionResult> Index(int page = 1)
        {
            var obj = new UserFiltersDto
            {
                Page = page,
                ItemsPerPage = 15,
            };
            var model = await _userService.GetUsersDtoAsync(obj);
            return View(model);
        }

    //    [AllowAnonymous]
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