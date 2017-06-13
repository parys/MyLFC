using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
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
        private readonly IMemoryCache _cache;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="adminService"></param>
        /// <param name="cache"></param>
        public AdminController(IAdminService adminService, IMemoryCache cache)
        {
            _adminService = adminService;
            _cache = cache;
        }

        /// <summary>
        /// Updates epl table.
        /// </summary>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpGet("updateTable")]
        public async Task<IActionResult> UpdateAplTable()
        {
            var result = await _adminService.UpdateTableAsync();
            _cache.Set("eplTable", result);
            return Ok(result);
        }
    }
}