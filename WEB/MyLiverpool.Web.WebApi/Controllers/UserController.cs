using System.Web.Mvc;
using MyLiverpool.Controllers;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    public class UserController : BaseController
    {
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

        //[Authorize(Roles = "UsersStart")]
        //public async Task<JsonResult> BanUser( int? banDayCount, int? userId)
        //{
        //    if (!userId.HasValue || !banDayCount.HasValue)
        //    {
        //        return Json(false);
        //    }
        //    var result = await _userService.BanUser(userId.Value, banDayCount.Value);
        //    return Json(result);
        //}
    }
}