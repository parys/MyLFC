using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class MaterialCommentController : Controller
    {
        private readonly IMaterialCommentService _commentService;

        public MaterialCommentController(IMaterialCommentService commentService)
        {
            _commentService = commentService;
        }

        [Route("list/{page:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetList(int page = 1, bool onlyUnverified = false)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _commentService.GetListAsync(page, onlyUnverified);
            return Ok(result);
        }

        [Route("material/{id:int}/list/{page:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetList(int id, int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _commentService.GetListByMaterialIdAsync(id, page);
            return Ok(result);
        }

        [Route("verify/{id:int}")]
        [HttpGet]
        [Authorize(Roles = nameof(RolesEnum.UserStart))]
        public async Task<IActionResult> VerifyAsync(int id)
        {
            var result = await _commentService.VerifyAsync(id);
            return Ok(result);
        }

        [Route("{type}")]
        [HttpPost]
        [Authorize]
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


        [Route("{id:int}")]
        [HttpDelete]
        [Authorize(Roles = nameof(RolesEnum.UserStart))]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var result = await _commentService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
