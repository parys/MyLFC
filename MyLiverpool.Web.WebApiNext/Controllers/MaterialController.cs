using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Web.WebApiNext.Extensions;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using Newtonsoft.Json;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class MaterialController : Controller
    {
        private readonly IMaterialService _materialService;

        public MaterialController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        [Route("list/{filtersObj}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetNewsItems([FromRoute] string filtersObj)
        {
            MaterialFiltersDto filters;
            if (filtersObj == null)
            {
                filters = new MaterialFiltersDto{Page = 1};
            }
            else
            {
                filters = (MaterialFiltersDto) JsonConvert.DeserializeObject(filtersObj, typeof(MaterialFiltersDto));
            }

            var result = await _materialService.GetDtoAllAsync(filters);
            return Ok(result);
        }

        [Route("{id:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetNewsItem(int id)
        {
            var model = await _materialService.GetDtoAsync(id);
            return Ok(model);
        }

        [Route("{id:int}")]
        [HttpDelete]
        [Authorize(Roles = nameof(RolesEnum.NewsStart))]
        public async Task<IActionResult> Delete(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }

            var result = await _materialService.DeleteAsync(id.Value, User.GetUserId());
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
            var result = await _materialService.ActivateAsync(id.Value);
            return Ok(result);
        }

        [Route("{type}")]
        [HttpPost]
        [Authorize(Roles = nameof(RolesEnum.NewsStart))]
        public async Task<IActionResult> Create(string type, MaterialDto model)
        {
            MaterialType materialType;
            if (!ModelState.IsValid || !Enum.TryParse(type, true, out materialType))
            {
                return BadRequest(ModelState);
            }
            if (!User.IsInRole(RolesEnum.NewsFull.ToString()))
            {
                model.Pending = true;
            }
            var result = await _materialService.CreateAsync(model, User.GetUserId(), materialType);
            return Ok(result);
        }

        [Route("{id:int}")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.NewsStart))]
        public async Task<IActionResult> Update(int id, MaterialDto model)
        {
            if (id != model.Id)
            {
                return BadRequest(ModelState);
            }
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
            var result = await _materialService.EditAsync(model, User.GetUserId());
            return Ok(result);
        }

        [Route("AddView/{id:int}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> AddView(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var result = await _materialService.AddViewAsync(id.Value);
            return Ok(result);
        }
    }
}