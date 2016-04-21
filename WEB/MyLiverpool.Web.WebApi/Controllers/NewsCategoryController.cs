using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/NewsCategory")]
    [Authorize]
    public class NewsCategoryController : ApiController
    {
        private readonly IMaterialCategoryService _materialCategoryService;
        private MaterialType _materialType = MaterialType.News;

        public NewsCategoryController(IMaterialCategoryService materialCategoryService)
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
        [Authorize]
        public async Task<IHttpActionResult> Get()
        {
            var result = await _materialCategoryService.GetListAsync(_materialType);
            return Ok(result);
        }

        [Route]
        [HttpPost]
        [Authorize(Roles="NewsFull")]
        public async Task<IHttpActionResult> Create(MaterialCategoryDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _materialCategoryService.CreateAsync(dto);
            return Ok(result);
        }

        [Route]
        [HttpPut]
        [Authorize(Roles = "NewsFull")]
        public async Task<IHttpActionResult> Update(MaterialCategoryDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _materialCategoryService.UpdateAsync(dto);
            return Ok(result);
        }
    }
}
