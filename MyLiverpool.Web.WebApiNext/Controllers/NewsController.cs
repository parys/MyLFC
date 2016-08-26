using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.DTO;
using MyLiverpool.Web.WebApiNext.Extensions;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class NewsController : Controller
    {
//using System.Threading.Tasks;
//using System.Web.Http;
//using Microsoft.AspNet.Identity;
//using MyLiverpool.Business.DTO;
//using MyLiverpoolSite.Business.Contracts;
//using MyLiverpoolSite.Data.Entities;

        private readonly IMaterialService _materialService;
        private const MaterialType Type = MaterialType.News;

        public NewsController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        [Route("list")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetNewsItems(int page = 1, int? categoryId = null, string authorUserName = null)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _materialService.GetDtoAllAsync(page, categoryId, authorUserName, Type);
            return Ok(result);
        }

        //[Route("{id:int}")]
        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<IActionResult> GetNewsItem(int id)
        //{
        //    var model = await _materialService.GetDtoAsync(id, Type);
        //    return Ok(model);
        //}

        [Route("{id:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetNewsItem(int id)
        {
            var model = await _materialService.GetDtoAsync(id, Type);
            return Ok(model);
        }

        [Route("{id:int}")]
        [HttpDelete]
        [Authorize(Roles = "NewsStart")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }

            var result = await _materialService.DeleteAsync(id.Value, User.GetUserId(), Type);
            return Json(result);
        }

        [Route("Activate/{id:int}")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.NewsStart))]
        public async Task<IActionResult> Activate(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _materialService.ActivateAsync(id.Value, Type);
            return Ok(result);
        }

        [Route("")]
        [HttpPost]
        [Authorize(Roles = nameof(RolesEnum.NewsStart))]
        public async Task<IActionResult> Create(MaterialDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!User.IsInRole(RolesEnum.NewsFull.ToString()))
            {
                model.Pending = true;
            }
            var result = await _materialService.CreateAsync(model, User.GetUserId(), Type);
            return Ok(result);
        }

        [Route("")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.NewsStart))]
        public async Task<IActionResult> Update(MaterialDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!User.IsInRole(RolesEnum.NewsFull.ToString()))
            {
                if (model.AuthorId != User.GetUserId())
                {
                    return Unauthorized();
                }
                model.Pending = true;
            }
            var result = await _materialService.EditAsync(model, User.GetUserId(), Type);
            return Ok(result);
        }

        [Route("AddView/{id:int}")]
        [HttpPut]
        [AllowAnonymous]
        public async Task<IActionResult> AddView(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _materialService.AddViewAsync(id.Value, Type);
            return Ok(result);
        }
    }
}