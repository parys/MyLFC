using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages role groups.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.AdminFull)), Route("api/v1/[controller]")]
    public class RoleGroupController : Controller
    {
        private readonly IRoleService _roleService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="roleService"></param>
        public RoleGroupController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        /// <summary>
        /// Returns all role groups.
        /// </summary>
        /// <returns>Role groups list.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _roleService.GetRoleGroupsDtoAsync();
            return Ok(result);
        }
    }
}
