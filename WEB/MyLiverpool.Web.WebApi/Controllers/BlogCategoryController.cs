using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/BlogCategory")]
    [Authorize]
    public class BlogCategoryController : ApiController
    {
        private readonly IMaterialCategoryService _materialCategoryService;
        private readonly MaterialType _materialType = MaterialType.Blog;

        public BlogCategoryController(IMaterialCategoryService materialCategoryService)
        {
            _materialCategoryService = materialCategoryService;
        }

        [Route]
        [HttpGet]
        [Authorize()]
        public async Task<IHttpActionResult> Get(int id)
        {
            var result = await _materialCategoryService.GetAsync(id, _materialType);
            return Ok(result);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get()
        {
            var result = await _materialCategoryService.GetListAsync(_materialType);
            return Ok(result);
        }

        [Route]
        [HttpPost]
        [Authorize(Roles="BlogFull")]
        public async Task<IHttpActionResult> Create(MaterialCategoryDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            dto.MaterialType = _materialType;
            var result = await _materialCategoryService.CreateAsync(dto);
            return Ok(result);
        }

        [Route]
        [HttpPut]
        [Authorize(Roles = "BlogFull")]
        public async Task<IHttpActionResult> Update(int id, MaterialCategoryDto dto)
        {
            if (!ModelState.IsValid || id != dto.Id)
            {
                return BadRequest();
            }
            var result = await _materialCategoryService.UpdateAsync(dto);
            return Ok(result);
        }

        [Route]
        [HttpDelete]
        [Authorize(Roles = "BlogFull")]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var result = await _materialCategoryService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
