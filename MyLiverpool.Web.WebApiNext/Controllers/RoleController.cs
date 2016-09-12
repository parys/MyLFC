using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class RoleController : Controller
    {
        private readonly IRoleService _roleService;

        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetUserRoles(int userId)
        {
            if (userId < 1)
            {
                return BadRequest();
            }
            var idd = User.Identity;
            var result = await _roleService.GetUserRolesAsync(userId);
            return Ok(result);
        }
    }
}
