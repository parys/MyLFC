using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/Pm")]
    [Authorize]
    public class PmController : ApiController
    {
        private readonly IPmService _pmService;

        public PmController(IPmService pmService)
        {
            _pmService = pmService;
        }

        [Route]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetPms()
        {
            var model = await _pmService.GetListAsync(User.Identity.GetUserId<int>());
            return Ok(model);
        }

        [Route]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> Pm(int id)
        {
            var model = await _pmService.GetAsync(id, User.Identity.GetUserId<int>());
            return Ok(model);
        }

        [Route]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> WritePm(PrivateMessageDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            model.SenderId = User.Identity.GetUserId<int>();
            var userName = User.Identity.Name;
            if (model.ReceiverUserName == userName)
            {
                return BadRequest();
            }
            var result = await _pmService.SaveAsync(model);
            return Ok(result);
        }
    }
}
