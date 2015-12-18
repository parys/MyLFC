using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    [Authorize(Roles = "AdminFull")]
    public class RoleController : Controller
    {
        private readonly IRoleService _roleService;

        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        // GET: Role
        public async Task<ActionResult> Index(int page = 1)
        {
            var model = await _roleService.GetAllGroups(page);
            return View(model);
        }
    }
}