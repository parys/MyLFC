using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

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
        public async Task<IActionResult> GetItems(int page = 1, int? categoryId = null,
            string authorUserName = null)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _materialService.GetDtoAllAsync(page, categoryId, authorUserName, Type);
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

            var result = await _materialService.DeleteAsync(id.Value, int.Parse(User.Identity.Name), Type);//todo ?
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
            var result = await _materialService.CreateAsync(model, int.Parse(User.Identity.Name), Type);//todo ?
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
                if (model.AuthorId != int.Parse(User.Identity.Name))//todo ?
                {
                    return Unauthorized();
                }
                model.Pending = true;
            }
            var result = await _materialService.EditAsync(model, int.Parse(User.Identity.Name), Type);//todo ?
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
