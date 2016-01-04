using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpool.Controllers;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Users;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController()
        {
            
        }

        public UserController(IUserService userService) //todo remove
        {
            _userService = userService;
        }

        [AllowAnonymous]
        public ActionResult List()
        { 
            return View();
        }

        [AllowAnonymous]
        public ActionResult Info()      
        {
            return View();
        }

        [Authorize]
        public ActionResult PrivateMessages()
        {
            return View();
        }

        [Authorize]
        public ActionResult ReadMessage()
        {
            return View();
        }

        [Authorize]
        public ActionResult WriteMessage()
        {
            return View();
        }

        [Authorize(Roles = "UsersStart")]
        public async Task<JsonResult> BanUser( int? banDayCount, int? userId)
        {
            if (!userId.HasValue || !banDayCount.HasValue)
            {
                return Json(false);
            }
            var result = await _userService.BanUser(userId.Value, banDayCount.Value);
            return Json(result);
        }
    }
}