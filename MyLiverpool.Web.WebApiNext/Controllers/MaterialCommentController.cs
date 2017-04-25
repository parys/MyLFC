using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;
using Newtonsoft.Json;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Controller for manage material comments.
    /// </summary>
    [Authorize, Route("api/v1/[controller]")]
    public class MaterialCommentController : Controller
    {
        private readonly IMaterialCommentService _commentService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="commentService"></param>
        public MaterialCommentController(IMaterialCommentService commentService)
        {
            _commentService = commentService;
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
        /// <param name="type">Type of material.</param>
        /// <param name="dto">New comment model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize, HttpPost("{type}")]
        public async Task<IActionResult> CreateAsync(string type, [FromBody] MaterialCommentDto dto)
        {
            MaterialType materialType;
            if (!ModelState.IsValid || !Enum.TryParse(type, true, out materialType))
            {
                return BadRequest(ModelState);
            }
            dto.AuthorId = User.GetUserId();
            var result = await _commentService.AddAsync(dto, materialType);
            return Ok(result);
        }

        /// <summary>
        /// Deletes material comment.
        /// </summary>
        /// <param name="id">The identifier of removing comment.</param>
        /// <returns>Result of removing.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsFull)), HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var result = await _commentService.DeleteAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Updates comment.
        /// </summary>
        /// <param name="id">The identifier of comment.</param>
        /// <param name="dto">Comment.</param>
        /// <returns>Result of update.</returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] MaterialCommentDto dto)
        {
            if (id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!User.IsInRole(nameof(RolesEnum.UserStart)) && User.GetUserId() != dto.AuthorId)
            {
                return StatusCode(StatusCodes.Status403Forbidden);
            }

            var result = await _commentService.UpdateAsync(dto);
            return Ok(result);
        }
    }
}
