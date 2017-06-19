using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using MyLiverpool.Web.WebApiNext.Extensions;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;
using Newtonsoft.Json;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages materials.
    /// </summary>
    [AllowAnonymous, Route("api/v1/[controller]")]
    public class MaterialController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly ILogger<MaterialController> _logger;
        private readonly IMemoryCache _cache;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="materialService">Injecting materialService.</param>
        /// <param name="logger">Injecting logger.</param>
        /// <param name="cache">Injecting inMemory cache.</param>
        public MaterialController(IMaterialService materialService, ILogger<MaterialController> logger, IMemoryCache cache)
        {
            _materialService = materialService;
            _logger = logger;
            _cache = cache;
        }

        /// <summary>
        /// Returns list of filtered materials.  
        /// </summary>
        /// <param name="filtersObj">Contains filters.</param>
        /// <returns>List of materials.</returns>
        [AllowAnonymous, HttpGet("list/{filtersObj}")]
        public async Task<IActionResult> GetListItems([FromRoute] string filtersObj)
        {
            _logger.LogInformation( "Listing all items1111111111111");
            MaterialFiltersDto filters;
            if (filtersObj == null)
            {
                filters = GetBasicMaterialFilters(false);
            }
            else
            {
                filters = (MaterialFiltersDto) JsonConvert.DeserializeObject(filtersObj, typeof(MaterialFiltersDto));
            }
            filters.IsInNewsmakerRole = User.IsInRole(nameof(RolesEnum.NewsStart));
            var result = await _cache.GetOrCreateAsync(filters.ToString(),
                async x => await _materialService.GetDtoAllAsync(filters));
            return Ok(result);
        }

        /// <summary>
        /// Gets material by id.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <returns>Found material.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var model = await _materialService.GetDtoAsync(id);
            if (model.Pending)
            {
                if(User == null || !User.IsInRole(nameof(RolesEnum.NewsStart)))
                {
                    return BadRequest();
                }
            }
            return Ok(model);
        }

        /// <summary>
        /// Removes material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <returns>Result of removing.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _materialService.DeleteAsync(id, User);
            CleanCache();
            return Json(result);
        }

        /// <summary>
        /// Activates material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <returns>Result of activation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsFull) + "," + nameof(RolesEnum.BlogFull)), HttpGet("activate/{id:int}")]
        public async Task<IActionResult> ActivateAsync(int id)
        {
            var result = await _materialService.ActivateAsync(id, User);
            CleanCache();
            return Ok(result);
        }

        /// <summary>
        /// Creates new material.
        /// </summary>
        /// <param name="type">Material type.</param>
        /// <param name="model">Contains material model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpPost("{type}")]//todo add cutting absolute path to relative
        public async Task<IActionResult> CreateAsync(string type, [FromBody] MaterialDto model)
        {
            MaterialType materialType;
            if (!ModelState.IsValid || !Enum.TryParse(type, true, out materialType))
            {
                return BadRequest(ModelState);
            }
            model.Type = materialType;
            if (!User.IsInRole(nameof(RolesEnum.NewsFull)) && 
                !User.IsInRole(nameof(RolesEnum.BlogFull)))
            {
                model.Pending = true;
            }
            var result = await _materialService.CreateAsync(model, User.GetUserId());
            CleanCache();
            return Ok(result);
        }


        /// <summary>
        /// Updates material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <param name="model">Contains material model.</param>
        /// <returns>Result of updation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]MaterialDto model)//todo add cutting absolute path to relative
        {
            if (id != model.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!User.IsInRole(nameof(RolesEnum.NewsFull)) && 
                !User.IsInRole(nameof(RolesEnum.BlogFull)))
            {
                if (model.UserId != User?.GetUserId())
                {
                    return Unauthorized();
                }
                model.Pending = true;
            }
            var result = await _materialService.EditAsync(model);
            CleanCache();
            return Ok(result);
        }

        /// <summary>
        /// Adds view to material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <returns>Result of addition view.</returns>
        [AllowAnonymous, HttpGet("AddView/{id:int}")]
        public async Task<IActionResult> AddViewAsync(int id)
        {
            await _materialService.AddViewAsync(id);
            CleanCache();
            return Json(true);
        }

        private MaterialFiltersDto GetBasicMaterialFilters(bool isNewsMaker)
        {
            return new MaterialFiltersDto {
                Page = 1,
                MaterialType = MaterialType.Both,
                IsInNewsmakerRole = isNewsMaker
            };
        }

        private void CleanCache()
        {
            _cache.Remove(GetBasicMaterialFilters(false).ToString());
            _cache.Remove(GetBasicMaterialFilters(true).ToString());
        }
    }
}