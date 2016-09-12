using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class NewsCommentController : Controller
    {
        private readonly IMaterialCommentService _materialCommentService;
        private const MaterialType Type = MaterialType.News;

        public NewsCommentController(IMaterialCommentService materialCommentService)
        {
            _materialCommentService = materialCommentService;
        }

        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(MaterialCommentEditingDto comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            comment.AuthorId = int.Parse(User.Identity.Name);//todo GetUserId<int>());
            var result = await _materialCommentService.AddAsync(comment, Type);
            result.AuthorUserName = "";//todo User.Identity.GetUserName();
            return Ok(result);
        }

        [Route("")]
        [HttpDelete]
        [Authorize(Roles = nameof(RolesEnum.UserStart))]
        public async Task<IActionResult> Delete(int? id)
        {
            if (!id.HasValue || id == 0)
            {
                return BadRequest();
            }

            var result = await _materialCommentService.DeleteAsync(id.Value, Type);
            return Ok(result);
        }

        [Route("")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Update(MaterialCommentEditingDto comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (comment.AuthorId != int.Parse(User.Identity.Name) && !User.IsInRole(nameof(RolesEnum.UserStart)))
            {
                return Unauthorized();
            }
            var result = await _materialCommentService.EditAsync(comment, Type);
            return Ok(result);
        }
    }
}
