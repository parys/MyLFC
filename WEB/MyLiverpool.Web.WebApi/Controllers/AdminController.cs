using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/admin")]
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class AdminController : ApiController
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [Route("updateTable")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> UpdateAplTable()
        {
            var result = await _adminService.UpdateTableAsync();
            return Ok(result);
        }
    }
}