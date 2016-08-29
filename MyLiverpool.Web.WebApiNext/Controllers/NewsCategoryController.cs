using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    public class NewsCategoryController : Controller
    {
        private readonly IMaterialCategoryService _materialCategoryService;
        private MaterialType _materialType = MaterialType.News;

        public NewsCategoryController(IMaterialCategoryService materialCategoryService)
        {
            _materialCategoryService = materialCategoryService;
        }

        [Route("{id:int}")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get(int id) //todo not all checked
        {
            var result = await _materialCategoryService.GetAsync(id, _materialType);
            return Ok(result);
        }

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get() //todo not all checked
        {
            var result = await _materialCategoryService.GetListAsync(_materialType);
            return Ok(result);
        }

        [Route("")]
        [HttpPost]
        [Authorize(Roles = "NewsFull")]
        public async Task<IActionResult> Create(MaterialCategoryDto dto) //todo not all checked
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            dto.MaterialType = _materialType;
            var result = await _materialCategoryService.CreateAsync(dto);
            return Ok(result);
        }

        [Route("")]
        [HttpPut]
        [Authorize(Roles = "NewsFull")]
        public async Task<IActionResult> Update(int id, MaterialCategoryDto dto) //todo not all checked
        {
            if (!ModelState.IsValid || id != dto.Id)
            {
                return BadRequest();
            }
            var result = await _materialCategoryService.UpdateAsync(dto);
            return Ok(result);
        }

        [Route("{id:int}")]
        [HttpDelete]
        [Authorize(Roles = "NewsFull")]
        public async Task<IActionResult> Delete(int id) //todo not all checked
        {
            var result = await _materialCategoryService.DeleteAsync(id);
            return Ok(result);
        }
    }
}