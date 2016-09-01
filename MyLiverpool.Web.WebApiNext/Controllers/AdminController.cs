//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using MyLiverpoolSite.Business.Contracts;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpool.Web.WebApiNext.Controllers
//{
//    [Route("api/[controller]")]
//    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
//    public class AdminController : Controller
//    {
//        private readonly IAdminService _adminService;

//        public AdminController(IAdminService adminService)
//        {
//            _adminService = adminService;
//        }

//        [Route("updateTable")]
//        [HttpGet]
//        [Authorize]
//        public async Task<IActionResult> UpdateAplTable() //todo not all checked
//        {
//            var result = await _adminService.UpdateTableAsync();
//            return Ok(result);
//        }
//    }
//}