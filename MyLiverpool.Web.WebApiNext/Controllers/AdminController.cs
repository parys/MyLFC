using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class AdminController : Controller
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [Route("updateTable")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> UpdateAplTable()
        {
            var result = await _adminService.UpdateTableAsync();
            return Ok(result);
        }
    }
}