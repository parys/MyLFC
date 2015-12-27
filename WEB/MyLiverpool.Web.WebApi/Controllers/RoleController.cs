using System.Threading.Tasks;
using System.Web.Helpers;
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
            var model = await _roleService.GetAllGroupsAsync(page);
            return View(model);
        }

        public async Task<JsonResult> EditRoleGroup(int? newRoleGroupId, int? userId)
        {
            if (!newRoleGroupId.HasValue || !userId.HasValue)
            {
                return Json(false);
            }
            var result = await _roleService.EditRoleGroupAsync(newRoleGroupId.Value, userId.Value);
            return Json(result);
        }
    }
}