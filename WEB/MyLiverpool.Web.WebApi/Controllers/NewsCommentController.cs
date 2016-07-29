using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{

    [RoutePrefix("api/NewsComment")]
    [Authorize]
    public class NewsCommentController : ApiController
    {
        private readonly IMaterialCommentService _materialCommentService;
        private const MaterialType Type = MaterialType.News;

        public NewsCommentController(IMaterialCommentService materialCommentService)
        {
            _materialCommentService = materialCommentService;
        }

        [Route]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> Create(MaterialCommentEditingDto comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            comment.AuthorId = User.Identity.GetUserId<int>();
            var result = await _materialCommentService.AddAsync(comment, Type);
            result.AuthorUserName = User.Identity.GetUserName();
            return Ok(result);
        } 

        [Route]
        [HttpDelete]
        [Authorize(Roles = nameof(RolesEnum.UserStart))]
        public async Task<IHttpActionResult> Delete(int? id)
        {
            if (!id.HasValue || id == 0)
            {
                return BadRequest();
            }
            
            var result = await _materialCommentService.DeleteAsync(id.Value, Type);
            return Ok(result);
        }

        [Route]
        [HttpPut]
        [Authorize]
        public async Task<IHttpActionResult> Update(MaterialCommentEditingDto comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (comment.AuthorId != User.Identity.GetUserId<int>() && !User.IsInRole(nameof(RolesEnum.UserStart)))
            {
                return Unauthorized();
            }
            var result = await _materialCommentService.EditAsync(comment, Type);
            return Ok(result);
        }
    }
}
