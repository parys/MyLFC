using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages roles.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class RoleController : Controller
    {
        private readonly IRoleService _roleService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="roleService"></param>
        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        /// <summary>
        /// Gets current user roles.
        /// </summary>
        /// <returns>List of current user roles.</returns>
        [Authorize, HttpGet("")]
        public async Task<IActionResult> GetUserRoles()
        {
            var result = await _roleService.GetUserRolesAsync(User.GetUserId());
            return Ok(result);
        }
    }
}
