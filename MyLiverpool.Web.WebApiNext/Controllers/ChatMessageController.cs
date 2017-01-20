using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages chat entitties.
    /// </summary>
    [AllowAnonymous, Route("api/v1/[controller]")]
    public class ChatMessageController : Controller
    {
        private readonly IChatMessageService _chatMessageService;
        /// <summary>
        /// Controller.
        /// </summary>
        public ChatMessageController(IChatMessageService chatMessageService)
        {
            _chatMessageService = chatMessageService;
        }

        /// <summary>
        /// Adds new chat message.
        /// </summary>
        /// <param name="dto">Message entity</param>
        /// <returns>Result of creation message.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]ChatMessageDto dto)
        {
            dto.AuthorId = User.GetUserId();
            var result = await _chatMessageService.CreateAsync(dto);
            result.Ip = HttpContext.GetIp();
            
            return Ok(result);
        }     
        
        /// <summary>
        /// Returns chat messages list.
        /// </summary>
        /// <returns>Result of creation message.</returns>
        [Authorize, HttpGet("list")]
        public async Task<IActionResult> GetListAsync()
        {
            var result = await _chatMessageService.GetListAsync();
            if (!User.IsInRole(nameof(RolesEnum.AdminStart)))
            {
                foreach (var messageDto in result)
                {
                    messageDto.Ip = string.Empty;
                }
            }
            return Ok(result);
        }
    }
}
