using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/RoleGroup")]
    [Authorize(Roles = "AdminFull")]
    public class ApiRoleGroupController : ApiController
    {
        private readonly IRoleService _roleService;

        public ApiRoleGroupController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [Route("")]
        [HttpGet]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> GetAll()
        {
            var result = await _roleService.GetRoleGroupsDtoAsync();
            return Ok(result);
        }
    }
}
