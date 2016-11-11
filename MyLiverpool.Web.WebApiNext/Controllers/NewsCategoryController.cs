using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages news categories.
    /// </summary>
    [Route("api/[controller]")]
    public class NewsCategoryController : Controller
    {
        private readonly IMaterialCategoryService _materialCategoryService;
        private MaterialType _materialType = MaterialType.News;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="materialCategoryService"></param>
        public NewsCategoryController(IMaterialCategoryService materialCategoryService)
        {
            _materialCategoryService = materialCategoryService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id:int}")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _materialCategoryService.GetAsync(id, _materialType);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {
            var result = await _materialCategoryService.GetListAsync(_materialType);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [Authorize(Roles = nameof(RolesEnum.NewsFull))]
        public async Task<IActionResult> CreateAsync([FromBody] MaterialCategoryDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            dto.MaterialType = _materialType;
            var result = await _materialCategoryService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("{id:int}")]
        [HttpPut]
        [Authorize(Roles = nameof(RolesEnum.NewsFull))]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] MaterialCategoryDto dto)
        {
            if (!ModelState.IsValid || id != dto.Id)
            {
                return BadRequest();
            }
            var result = await _materialCategoryService.UpdateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id:int}")]
        [HttpDelete]
        [Authorize(Roles = nameof(RolesEnum.NewsFull))]
        public async Task<IActionResult> DeletAsync(int id)
        {
            var result = await _materialCategoryService.DeleteAsync(id);
            return Ok(result);
        }
    }
}