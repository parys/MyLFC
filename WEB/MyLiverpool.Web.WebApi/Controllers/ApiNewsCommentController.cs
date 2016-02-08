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
    public class ApiNewsCommentController : ApiController
    {
        private readonly IMaterialCommentService _materialCommentService;
        private const MaterialType Type = MaterialType.News;

        public ApiNewsCommentController(IMaterialCommentService materialCommentService)
        {
            _materialCommentService = materialCommentService;
        }

        [Route("Add")]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> Add(NewsCommentEditingDto comment)
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

        [Route("Delete")]
        [HttpDelete]
        [Authorize(Roles = "UsersStart")]
        public async Task<IHttpActionResult> Delete(int? id)
        {
            if (!id.HasValue || id == 0)
            {
                return BadRequest();
            }
            
            var result = await _materialCommentService.DeleteAsync(id.Value, Type);
            return Ok(result);
        }

        [Route("Edit")]
        [HttpPut]
        [Authorize]
        public async Task<IHttpActionResult> Edit(NewsCommentEditingDto comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (comment.AuthorId != User.Identity.GetUserId<int>() && !User.IsInRole("UsersStart"))
            {
                return Unauthorized();
            }
            var result = await _materialCommentService.EditAsync(comment, Type);
            return Ok(result);
        }
    }
}
