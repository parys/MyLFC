//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using MyLiverpool.Business.Contracts;
//using MyLiverpool.Business.DTO;
//using MyLiverpool.Data.Entities;
//using MyLiverpool.Web.WebApiNext.Extensions;

//namespace MyLiverpool.Web.WebApiNext.Controllers
//{
//    [Route("api/[controller]")]
//    [Authorize]
//    public class NewsCommentController : Controller
//    {
//        private readonly IMaterialCommentService _materialCommentService;
//        private const MaterialType Type = MaterialType.News;

//        public NewsCommentController(IMaterialCommentService materialCommentService)
//        {
//            _materialCommentService = materialCommentService;
//        }

//        [Route("")]
//        [HttpPost]
//        [Authorize]
//        public async Task<IActionResult> Create(MaterialCommentDto comment)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest();
//            }
//            comment.AuthorId = User.GetUserId();
//            var result = await _materialCommentService.AddAsync(comment, Type);
//            result.AuthorUserName = "";//todo User.Identity.GetUserName();
//            return Ok(result);
//        }

//        [Route("")]
//        [HttpPut]
//        [Authorize]
//        public async Task<IActionResult> Update(MaterialCommentDto comment)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest();
//            }
//            if (comment.AuthorId != User.GetUserId() && !User.IsInRole(nameof(RolesEnum.UserStart)))
//            {
//                return Unauthorized();
//            }
//            var result = await _materialCommentService.UpdateAsync(comment);
//            return Ok(result);
//        }
//    }
//}
