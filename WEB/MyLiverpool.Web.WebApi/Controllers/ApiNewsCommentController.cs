﻿using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{

    [RoutePrefix("api/NewsComment")]
    [Authorize]
    public class ApiNewsCommentController : ApiController
    {
        private readonly INewsCommentService _newsCommentService;

        public ApiNewsCommentController(INewsCommentService newsCommentService)
        {
            _newsCommentService = newsCommentService;
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
            var result = await _newsCommentService.AddAsync(comment);
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
            
            var result = await _newsCommentService.DeleteAsync(id.Value);
            return Ok(result);
        } 
    }
}
