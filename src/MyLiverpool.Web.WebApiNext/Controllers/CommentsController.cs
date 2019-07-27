using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Comments;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLiverpool.Business.Services.Helpers;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages comments.
    /// </summary>
    public class CommentsController : BaseController
    {
        private readonly ISignalRHubAggregator _signalRHubAggregator;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="signalRHubAggregator"></param>
        public CommentsController(ISignalRHubAggregator signalRHubAggregator)
        {
            _signalRHubAggregator = signalRHubAggregator;
        }
        
        /// <summary>
        /// Returns list of filtered materials.  
        /// </summary>
        /// <param name="request">Contains filters.</param>
        /// <returns>List of materials.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetListItems([FromQuery] GetCommentListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns last comments list.
        /// </summary>
        /// <returns>Last comments list.</returns>
        [AllowAnonymous, HttpGet("last")]
        public async Task<IActionResult> GetLastList()
        {
            var result = await CacheManager.GetOrCreateAsync(CacheKeysConstants.LastComments,
                async () => await Mediator.Send(new GetLastCommentListQuery.Request()));
            return Ok(result.Results);
        }

        /// <summary>
        /// Returns pageable comments list for material.
        /// </summary>
        /// <param name="id">The identifier of material.</param>
        /// <param name="page">The page of comments list.</param>
        /// <returns>Selected page comments list for material.</returns>
        [Obsolete("Remove after 1 Aug 19")]
        [AllowAnonymous, HttpGet("material/{id:int}/list/{page:int}")]
        public async Task<IActionResult> GetListForMaterialAsync(int id, int page = 1)
        {
            var request = new GetCommentListByEntityIdQuery.Request
            {
                MaterialId = id,
                CurrentPage = 1,
                PageSize = 500 //temporary

            };
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns pageable comments list for match.
        /// </summary>
        /// <param name="id">The identifier of match.</param>
        /// <param name="page">The page of comments list.</param>
        /// <returns>Selected page comments list for match.</returns>
        [Obsolete("Remove after 1 Aug 19")]
        [AllowAnonymous, HttpGet("match/{id:int}/list/{page:int}")]
        public async Task<IActionResult> GetListForMatchAsync(int id, int page = 1)
        {
            var request = new GetCommentListByEntityIdQuery.Request
            {
                MatchId = id,
                CurrentPage = 1,
                PageSize = 500 //temporary

            };
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Mark comment as verified by moderator.
        /// </summary>
        /// <param name="request">Id of verifiable comment.</param>
        /// <returns>Result of verification.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpPut("{id:int}/verify")]
        public async Task<IActionResult> VerifyAsync([FromRoute]VerifyCommentCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Creates new material comment.
        /// </summary>
        /// <param name="request">New comment model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody] CreateCommentCommand.Request request)
        {
            var result = await Mediator.Send(request);

            CacheManager.Remove(CacheKeysConstants.MaterialsLatest,
                CacheKeysConstants.MaterialsPinned, CacheKeysConstants.LastComments);

            var oldMessage = result.Message.Substring(0);
            result.Message = result.Message.SanitizeComment();

            if (!string.IsNullOrWhiteSpace(result.Message))
            {
                _signalRHubAggregator.Send(HubEndpointConstants.AddComment, result);
            }

            result.Message = oldMessage;

            return Ok(result);
        }

        /// <summary>
        /// Deletes material comment.
        /// </summary>
        /// <param name="request">The identifier of removing comment.</param>
        /// <returns>Result of removing.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute]DeleteCommentCommand.Request request)
        {
            var result = await Mediator.Send(request);

            CacheManager.Remove(CacheKeysConstants.MaterialsLatest, 
                CacheKeysConstants.MaterialsPinned, CacheKeysConstants.LastComments);

            return Ok(result);
        }

        /// <summary>
        /// Updates comment.
        /// </summary>
        /// <param name="id">The identifier of comment.</param>
        /// <param name="request">Comment.</param>
        /// <returns>Result of update.</returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync([FromRoute]int id, [FromBody] UpdateCommentCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }

            var result = await Mediator.Send(request);
            CacheManager.Remove(CacheKeysConstants.LastComments);

            return Ok(result);
        }

        /// <summary>
        /// Updates comment vote.
        /// </summary>
        /// <param name="request">Comment vote.</param>
        /// <returns>Result of update.</returns>
        [Authorize, HttpPut("vote")]
        public async Task<IActionResult> UpdateVoteAsync([FromBody] UpdateCommentVoteCommand.Request request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            return Ok(await Mediator.Send(request));
        }
    }
}
