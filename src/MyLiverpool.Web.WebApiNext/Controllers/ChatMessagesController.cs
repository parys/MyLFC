using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.ChatMessages;
using MyLfc.Common.Web;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages chat entities.
    /// </summary>
    public class ChatMessagesController : BaseController
    {
        /// <summary>
        /// Adds new chat message.
        /// </summary>
        /// <param name="request">Message entity</param>
        /// <returns>Result of creation message.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateChatMessageCommand.Request request)
        {
            request.Ip = HttpContext.GetIp();
            var result = await Mediator.Send(request);
            CleanChatCache();

            return Ok(result);
        }

        /// <summary>
        /// Deletes chat message.
        /// </summary>
        /// <param name="request">Message identifier.</param>
        /// <returns>Result of deleting message.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute]DeleteChatMessageCommand.Request request)
        {
            var result = await Mediator.Send(request);

            CleanChatCache();
            return Ok(result);
        }     
        
        /// <summary>
        /// Returns chat messages list.
        /// </summary>
        /// <returns>Result of creation message.</returns>
        [Obsolete("Remove after 1 Aug 19")]
        [AllowAnonymous, HttpGet("list/{lastMessageId:int}/{typeId:int}")]
        public async Task<IActionResult> GetOldListAsync([FromRoute]GetChatMessageListQuery.Request request)
        {
            GetChatMessageListQuery.Response result;
            if (request.LastMessageId == 0)
            {
                result = await CacheManager.GetOrCreateAsync(
                    CacheKeysConstants.ChatName + request.TypeId,
                    async () => await Mediator.Send(request));
            }
            else
            {
                result = await Mediator.Send(request);
            }
            return Ok(result.Results);
        }  
        
        /// <summary>
        /// Returns chat messages list.
        /// </summary>
        /// <returns>Result of creation message.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetListAsync([FromQuery]GetChatMessageListQuery.Request request)
        {
            GetChatMessageListQuery.Response result;
            if (request.LastMessageId == 0)
            {
                result = await CacheManager.GetOrCreateAsync(
                    CacheKeysConstants.ChatName + request.TypeId,
                    async () => await Mediator.Send(request));
            }
            else
            {
                result = await Mediator.Send(request);
            }
            return Ok(result);
        }

        /// <summary>
        /// Updates club.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="request">Modified club entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync([FromRoute]int id, [FromBody]UpdateChatMessageCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }

            var result = await Mediator.Send(request);

            CleanChatCache();
            return Ok(result);
        }

        private void CleanChatCache()
        {
            CacheManager.Remove(CacheKeysConstants.ChatName + ChatMessageTypeEnum.Mini,
                CacheKeysConstants.ChatName + ChatMessageTypeEnum.All);
        }
    }
}
