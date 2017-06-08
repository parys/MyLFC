using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Controller for manage admin functions.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.AdminStart)), Route("api/v1/[controller]")]
    public class AdminController : Controller
    {
        private readonly IAdminService _adminService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="adminService"></param>
        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        /// <summary>
        /// Updates epl table.
        /// </summary>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpGet("updateTable")]
        public async Task<IActionResult> UpdateAplTable()
        {
            var result = await _adminService.UpdateTableAsync();
            return Ok(result);
        }
    }
}