using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        private readonly IMaterialService _materialService;
        private const MaterialType Type = MaterialType.Blog;

        public BlogController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetItems(MaterialFiltersDto filters)
        {

            var result = await _materialService.GetDtoAllAsync(filters);
            return Ok(result);
        }

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetItem(int id)
        {
            var model = await _materialService.GetDtoAsync(id, Type);
            return Ok(model);
        }

        [Route("")]
        [HttpDelete]
        [Authorize(Roles = nameof(RolesEnum.BlogStart))]
        public async Task<IActionResult> Delete(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }

            var result = await _materialService.DeleteAsync(id.Value, User.GetUserId(), Type);
            return Json(result);
        }

        [Route("Activate")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.BlogFull))]
        public async Task<IActionResult> Activate(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _materialService.ActivateAsync(id.Value, Type);
            return Json(result);
        }

        [Route("")]
        [HttpPost]
        [Authorize(Roles = nameof(RolesEnum.BlogStart))]
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
        [Authorize(Roles = nameof(RolesEnum.BlogStart))]
        public async Task<IActionResult> Update(MaterialDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!User.IsInRole(RolesEnum.BlogFull.ToString()))
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

        [Route("AddView")]
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
