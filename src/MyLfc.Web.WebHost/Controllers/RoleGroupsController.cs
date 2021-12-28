using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.RoleGroups;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages role groups.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class RoleGroupsController : BaseController
    {
        /// <summary>
        /// Returns all role groups.
        /// </summary>
        /// <returns>Role groups list.</returns>
        [AllowAnonymous, HttpGet]
        public async Task<IActionResult> GetAllAsync([FromQuery]GetRoleGroupsQuery.Request request)
        {
            var result = await Mediator.Send(request);
            return Ok(result.Results);
        }
    }
}
