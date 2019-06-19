using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyLfc.Application.Materials;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages materials.
    /// </summary>
    public class MaterialsController : BaseController
    {
        private readonly IMaterialService _materialService;
        private readonly ILogger<MaterialsController> _logger;
        private readonly IDistributedCacheManager _cacheManager;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="materialService">Injecting materialService.</param>
        /// <param name="logger">Injecting logger.</param>
        /// <param name="cacheManager"></param>
        public MaterialsController(IMaterialService materialService, ILogger<MaterialsController> logger,
            IDistributedCacheManager cacheManager)
        {
            _materialService = materialService;
            _logger = logger;
            _cacheManager = cacheManager;
        }

        #region Old
        
        /// <summary>
        /// Removes material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <returns>Result of removing.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _materialService.DeleteAsync(id, User);
            _cacheManager.Remove(CacheKeysConstants.Material + id);
            _cacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest);
            return Ok(result);
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
            if (result != null)
            {
                _cacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest);
                _cacheManager.Set(CacheKeysConstants.Material + id, result);
            }

            return Ok(result);
        }

        /// <summary>
        /// Creates new material.
        /// </summary>
        /// <param name="type">Material type.</param>
        /// <param name="model">Contains material model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)),
         HttpPost("{type}")] //todo add cutting absolute path to relative
        public async Task<IActionResult> CreateAsync(string type, [FromBody] MaterialDto model)
        {
            if (!ModelState.IsValid || !Enum.TryParse(type, true, out MaterialType materialType))
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
            if (!model.Pending)
            {
                _cacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest);
            }

            return Ok(result);
        }


        /// <summary>
        /// Updates material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <param name="model">Contains material model.</param>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpPut("{id:int}")]
        public async Task<IActionResult>
            UpdateAsync(int id, [FromBody] MaterialDto model) //todo add cutting absolute path to relative
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
            _cacheManager.Set(CacheKeysConstants.Material + id, result);
            _cacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest);
            return Ok(result);
        }

        /// <summary>
        /// Adds view to material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <returns>Result of addition view.</returns>
        [Obsolete("Remove after 15 july 19")]
        [AllowAnonymous, HttpGet("AddView/{id:int}")]
        public async Task<IActionResult> AddViewOldAsync(int id)
        {
            await Mediator.Send(new AddMaterialReadCommand.Request { Id = id });
            UpdateMaterialCacheAddViewAsync(id);
            return Ok(true);
        }

        /// <summary>
        /// Extracts and returns file links for images.
        /// </summary>
        /// <param name="request">Url of page with images.</param>
        /// <returns>Found images links.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart)), HttpGet("imageLinks/{*url}")]
        public async Task<IActionResult> GetExtractedImageLinksAsync(GetExtractedImageLinksQuery.Request request)
        {
            var fileLinks = await Mediator.Send(request);
            return Ok(fileLinks);
        }

        private async void UpdateMaterialCacheAddViewAsync(int materialId)
        {
            var materialCache = await _cacheManager.GetAsync<GetMaterialDetailQuery.Response>(CacheKeysConstants.Material + materialId);
            if (materialCache != null)
            {
                materialCache.Reads++;
                _cacheManager.Set(CacheKeysConstants.Material + materialId, materialCache);
            }

            var materialsCache =
                await _cacheManager.GetAsync<GetLatestMaterialsQuery.Response>(CacheKeysConstants.MaterialsLatest);

            var material = materialsCache?.Results.FirstOrDefault(x => x.Id == materialId);
            if (material != null)
            {
                material.Reads++;
                _cacheManager.Set(CacheKeysConstants.MaterialsLatest, materialsCache);
            }

            var materialsPinnedCache =
                await _cacheManager.GetAsync<GetPinnedMaterialsQuery.Response>(CacheKeysConstants.MaterialsPinned);

            var materialPinned = materialsPinnedCache?.Results.FirstOrDefault(x => x.Id == materialId);
            if (material != null)
            {
                material.Reads++;
                _cacheManager.Set(CacheKeysConstants.MaterialsPinned, materialPinned);
            }
        }

        #endregion

        #region Mediatr


        /// <summary>
        /// Returns latest list materials.  
        /// </summary>
        /// <returns>List of latest materials.</returns>
        [AllowAnonymous, HttpGet("latest")]
        public async Task<IActionResult> GetLatestList()
        {
            var model = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.MaterialsLatest,
                async () => await Mediator.Send(new GetLatestMaterialsQuery.Request()));
            return Ok(model);
        }

        /// <summary>
        /// Returns top and pending list materials.  
        /// </summary>
        /// <returns>List of top and pending materials.</returns>
        [AllowAnonymous, HttpGet("pinned")]
        public async Task<IActionResult> GetPinnedList()
        {
            var request = new GetPinnedMaterialsQuery.Request();
            if (User != null)
            {
                if (User.IsInRole(nameof(RolesEnum.NewsStart))
                    || User.IsInRole(nameof(RolesEnum.BlogStart)))
                {
                    request.IncludePending = true;
                }
            }

            var model = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.MaterialsPinned,
                async () => await Mediator.Send(request));

            return Ok(model);
        }

        /// <summary>
        /// Returns list of filtered materials.  
        /// </summary>
        /// <param name="request">Contains filters.</param>
        /// <returns>List of materials.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetListItems([FromQuery] GetMaterialListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }


        /// <summary>
        /// Gets material by id.
        /// </summary>
        /// <param name="request">Contains material identifier.</param>
        /// <returns>Found material.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute]GetMaterialDetailQuery.Request request)
        {
            if (User != null)
            {
                if (User.IsInRole(nameof(RolesEnum.NewsStart))
                    || User.IsInRole(nameof(RolesEnum.BlogStart)))
                {
                    request.IncludePending = true;
                }
            }

            var model = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.Material + request.Id,
                async () => await Mediator.Send(request));
           
            return Ok(model);
        }

        /// <summary>
        /// Adds view to material.
        /// </summary>
        /// <param name="request">Material identifier.</param>
        /// <returns>Result of addition view.</returns>
        [AllowAnonymous, HttpPatch("{id:int}/read")]
        public async Task<IActionResult> AddReadAsync(AddMaterialReadCommand.Request request)
        {
            await Mediator.Send(request);
            UpdateMaterialCacheAddViewAsync(request.Id);
            return Ok(true);
        }
        #endregion
    }
}