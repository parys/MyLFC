using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [Route("updateTable")]
        [HttpGet]
        [Authorize(Roles = nameof(RolesEnum.AdminStart))]
        public async Task<IActionResult> UpdateAplTable()
        {
            var result = await _adminService.UpdateTableAsync();
            return Ok(result);
        }
    }
}