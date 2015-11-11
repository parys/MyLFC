using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: User
        public async Task<ActionResult> Index(int page = 1)
        {
            var result = await _userService.GetAll(page);
            return View(result);
        }
    }
}