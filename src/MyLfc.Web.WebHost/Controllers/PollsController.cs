using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Polls;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages polls.
    /// </summary>
    public class PollsController : BaseController
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetListAsync([FromQuery]GetPollListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns poll by id.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync([FromQuery]GetPollDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Creates new poll.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart))]
        [HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody] CreatePollCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates poll.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] UpdatePollCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            return Ok(await Mediator.Send(request));
        }
    }
}
