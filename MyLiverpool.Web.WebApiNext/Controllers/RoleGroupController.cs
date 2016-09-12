using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "AdminFull")]
    public class RoleGroupController : Controller
    {
        private readonly IRoleService _roleService;

        public RoleGroupController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            var result = await _roleService.GetRoleGroupsDtoAsync();
            return Ok(result);
        }
    }
}
