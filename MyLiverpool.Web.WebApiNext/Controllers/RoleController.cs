using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Web.WebApiNext.Extensions;

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
        [Authorize]
        public async Task<IActionResult> GetUserRoles()
        {
            var result = await _roleService.GetUserRolesAsync(User.GetUserId());
            return Ok(result);
        }
    }
}
