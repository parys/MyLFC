using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using Newtonsoft.Json;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Controller for manage comments.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class CommentController : Controller
    {
        private readonly ICommentService _commentService;
        private readonly IMemoryCache _cache;
        private const string LastComments = "lastComments";

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="commentService"></param>
        /// <param name="cache"></param>
        public CommentController(ICommentService commentService, IMemoryCache cache)
        {
            _commentService = commentService;
            _cache = cache;
        }

        /// <summary>
        /// Returns pageable comments list.
        /// </summary>
        /// <param name="filtersObj">Contains filters.</param>
        /// <returns>Selected page comments list.</returns>
        [AllowAnonymous, HttpGet("list/{filtersObj}")]
        public async Task<IActionResult> GetList([FromRoute] string filtersObj)
        {
            MaterialCommentFiltersDto filters;
            if (filtersObj == null)
            {
                filters = new MaterialCommentFiltersDto { Page = 1 };
            }
            else
            {
                filters = (MaterialCommentFiltersDto)JsonConvert.DeserializeObject(filtersObj, typeof(MaterialCommentFiltersDto));
            }
            var result = await _commentService.GetListAsync(filters);
            return Ok(result);
        }

        /// <summary>
        /// Returns last comments list.
        /// </summary>
        /// <returns>Last comments list.</returns>
        [AllowAnonymous, HttpGet("list/last")]
        public async Task<IActionResult> GetLastList()
        {
            var result = await _cache.GetOrCreateAsync(LastComments, async x => await _commentService.GetLastListAsync());
            return Json(result);
        }

        /// <summary>
        /// Returns pageable comments list for material.
        /// </summary>
        /// <param name="id">The identifier of material.</param>
        /// <param name="page">The page of comments list.</param>
        /// <returns>Selected page comments list for material.</returns>
        [AllowAnonymous, HttpGet("material/{id:int}/list/{page:int}")]
        public async Task<IActionResult> GetListForMaterialAsync(int id, int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _commentService.GetListByMaterialIdAsync(id, page);
            return Ok(result);
        }

        /// <summary>
        /// Returns pageable comments list for match.
        /// </summary>
        /// <param name="id">The identifier of match.</param>
        /// <param name="page">The page of comments list.</param>
        /// <returns>Selected page comments list for match.</returns>
        [AllowAnonymous, HttpGet("match/{id:int}/list/{page:int}")]
        public async Task<IActionResult> GetListForMatchAsync(int id, int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _commentService.GetListByMatchIdAsync(id, page);
            return Ok(result);
        }

        /// <summary>
        /// Mark comment as verified by moderator.
        /// </summary>
        /// <param name="id">Id of verifiable comment.</param>
        /// <returns>Result of verification.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpGet("verify/{id:int}")]
        public async Task<IActionResult> VerifyAsync(int id)
        {
            var result = await _commentService.VerifyAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Creates new material comment.
        /// </summary>
        /// <param name="dto">New comment model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody] CommentDto dto)
        {
            dto.IsVerified = IsSiteTeamMember();
            dto.AuthorId = User.GetUserId();
            var result = await _commentService.AddAsync(dto);
            CleanMaterialCache();
            _cache.Remove(LastComments);
            return Ok(result);
        }

        /// <summary>
        /// Deletes material comment.
        /// </summary>
        /// <param name="id">The identifier of removing comment.</param>
        /// <returns>Result of removing.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var result = await _commentService.DeleteAsync(id);
            CleanMaterialCache();
            return Ok(result);
        }

        /// <summary>
        /// Updates comment.
        /// </summary>
        /// <param name="id">The identifier of comment.</param>
        /// <param name="dto">Comment.</param>
        /// <returns>Result of update.</returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] CommentDto dto)
        {
            if (id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!User.IsInRole(nameof(RolesEnum.UserStart)) && User.GetUserId() != dto.AuthorId)
            {
                return StatusCode(StatusCodes.Status403Forbidden);
            }
            dto.IsVerified = IsSiteTeamMember();

            var result = await _commentService.UpdateAsync(dto);
            return Ok(result);
        }       
        
        /// <summary>
        /// Updates comment vote.
        /// </summary>
        /// <param name="dto">Comment vote.</param>
        /// <returns>Result of update.</returns>
        [Authorize, HttpPut("vote")]
        public async Task<IActionResult> UpdateVoteAsync([FromBody] CommentVoteDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            dto.UserId = User.GetUserId();
            var result = await _commentService.UpdateVoteAsync(dto);

            return Json(result);
        }

        private bool IsSiteTeamMember()
        {
            return User.Identity.IsAuthenticated
                                 &&(User.IsInRole(nameof(RolesEnum.AdminStart))
                                 || User.IsInRole(nameof(RolesEnum.BlogStart))
                                 || User.IsInRole(nameof(RolesEnum.InfoStart))
                                 || User.IsInRole(nameof(RolesEnum.NewsStart))
                                 || User.IsInRole(nameof(RolesEnum.UserStart)));
        }


        private MaterialFiltersDto GetBasicMaterialFilters(bool isNewsMaker)
        {
            return new MaterialFiltersDto
            {
                Page = 1,
                MaterialType = MaterialType.Both,
                IsInNewsmakerRole = isNewsMaker
            };
        }

        private void CleanMaterialCache()
        {
            _cache.Remove("MaterialList");//duplicate here and in material ctrl
          //  _cache.Remove(GetBasicMaterialFilters(true).ToString());
        }
    }
}
