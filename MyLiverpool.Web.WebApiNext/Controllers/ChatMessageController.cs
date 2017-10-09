﻿using System;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;
using MyLiverpool.Web.WebApiNext.Hubs;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages chat entitties.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class ChatMessageController : Controller
    {
        private readonly IChatMessageService _chatMessageService;
        private readonly IMemoryCache _cache;
        private const string ChatName = "Chat";
        /// <summary>
        /// Controller.
        /// </summary>
        public ChatMessageController(IChatMessageService chatMessageService, IMemoryCache cache)
        {
            _chatMessageService = chatMessageService;
            _cache = cache;
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
            //     _cache.Remove(ChatName + (int)dto.Type);

         //   var hubContext = new LfcHub(_chatMessageService);
         //   hubContext.SendChatMessage(result);
            return Ok(result);
        }

        /// <summary>
        /// Deletes chat message.
        /// </summary>
        /// <param name="id">Message identifier.</param>
        /// <returns>Result of deleting message.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _chatMessageService.DeleteAsync(id);
          //  _cache.Remove(ChatName);
            return Ok(result);
        }     
        
        /// <summary>
        /// Returns chat messages list.
        /// </summary>
        /// <returns>Result of creation message.</returns>
        [AllowAnonymous, HttpGet("list/{lastMessageId:int}/{typeId:int}")]
        public async Task<IActionResult> GetListAsync(int lastMessageId, int typeId)
        {
            var result = //await _cache.GetOrCreateAsync(ChatName + lastMessageId + typeId,
              //  async x => 
                await _chatMessageService.GetListAsync(lastMessageId, (ChatMessageTypeEnum) typeId);//);
            if (!User.IsInRole(nameof(RolesEnum.AdminStart)))
            {
                foreach (var messageDto in result)
                {
                    messageDto.Ip = string.Empty;
                }
            }
            return Ok(result);
        }
        
        /// <summary>
        /// Updates club.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified club entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]ChatMessageDto dto)
        {
            if (id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }
            int? userId = null;
            if (!User.IsInRole(nameof(RolesEnum.UserStart)))
            {
                userId = User.GetUserId();
            }
            var result = await _chatMessageService.UpdateAsync(dto, userId);
            return Ok(result);
        }
    }
}
