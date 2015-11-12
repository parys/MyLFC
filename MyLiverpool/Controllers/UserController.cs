using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    //[Authorize]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        
        public async Task<ActionResult> Index(int page = 1)
        {
            var result = await _userService.GetAll(page);
            return View(result);
        }

        public async Task<ActionResult> GetUserProfile(int? id)
        {
            if (!id.HasValue)
            {
                return View(); //todo BadRequest();
            }
            var result = await _userService.GetUserProfile(id.Value);
            if (result == null)
            {
                return HttpNotFound();
            }
            return View(result);
        }
    }
}