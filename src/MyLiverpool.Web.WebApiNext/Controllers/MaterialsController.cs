using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Comments;
using MyLfc.Application.Materials;
using MyLfc.Common.Web;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages materials.
    /// </summary>
    public class MaterialsController : BaseController
    {
        /// <summary>
        /// Removes material.
        /// </summary>
        /// <param name="request">Material identifier.</param>
        /// <returns>Result of removing.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute]DeleteMaterialCommand.Request request)
        {
            var result = await Mediator.Send(request);

            CacheManager.Remove(CacheKeysConstants.Material + request.Id);
            CacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest, CacheKeysConstants.MaterialsOthers);
            return Ok(result);
        }

        /// <summary>
        /// Activates material.
        /// </summary>
        /// <param name="request">Material identifier.</param>
        /// <returns>Result of activation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsFull) + "," + nameof(RolesEnum.BlogFull)), HttpPatch("{id:int}/activate")]
        public async Task<IActionResult> ActivateAsync([FromRoute]ActivateMaterialCommand.Request request)
        {
            var result = await Mediator.Send(request);
            CacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest, 
                    CacheKeysConstants.MaterialsOthers
                    , CacheKeysConstants.Material + request.Id);
            
            return Ok(true);
        }

        /// <summary>
        /// Creates new material.
        /// </summary>
        /// <param name="type">Material type.</param>
        /// <param name="request">Contains material model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)),
         HttpPost("{type}")]
        [Obsolete("Should remove after 1 May 20")]
        public async Task<IActionResult> CreateOldAsync(string type, [FromBody] CreateMaterialCommand.Request request)
        {
            if (!ModelState.IsValid || !Enum.TryParse(type, true, out MaterialType materialType))
            {
                return BadRequest(ModelState);
            }

            request.Type = materialType;

            var result = await Mediator.Send(request);
            if (!result.Pending)
            {
                CacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest, CacheKeysConstants.MaterialsOthers);
            }

            return Ok(result);
        }

        
        /// <summary>
        /// Creates new material.
        /// </summary>
        /// <param name="request">Contains material model.</param>
        /// <returns>Result of creation.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)),
         HttpPost("")] //todo add cutting absolute path to relative
        public async Task<IActionResult> CreateAsync([FromBody] CreateMaterialCommand.Request request)
        {
            var result = await Mediator.Send(request);
            if (!result.Pending)
            {
                CacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest, CacheKeysConstants.MaterialsOthers);
            }

            return Ok(result);
        }

        /// <summary>
        /// Returns material comments.
        /// </summary>
        /// <param name="request">The identifier.</param>
        /// <returns>Found match entity.</returns>
        [AllowAnonymous, HttpGet("{materialId:int}/comments")]
        public async Task<IActionResult> GetComments([FromRoute]GetCommentListByEntityIdQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }
        
        /// <summary>
        /// Updates material.
        /// </summary>
        /// <param name="id">Material identifier.</param>
        /// <param name="request">Contains material model.</param>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart) + "," + nameof(RolesEnum.BlogStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] UpdateMaterialCommand.Request request) //todo add cutting absolute path to relative
        {
            if (id != request.Id)
            {
                return BadRequest();
            }

            var result = await Mediator.Send(request);
            CacheManager.Remove(CacheKeysConstants.MaterialsPinned, CacheKeysConstants.MaterialsLatest,
                CacheKeysConstants.MaterialsOthers, CacheKeysConstants.Material + id);
            return Ok(result);
        }

        /// <summary>
        /// Extracts and returns file links for images.
        /// </summary>
        /// <param name="request">Url of page with images.</param>
        /// <returns>Found images links.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsStart)), HttpGet("imageLinks/{*url}")]
        public async Task<IActionResult> GetExtractedImageLinksAsync([FromRoute]GetExtractedImageLinksQuery.Request request)
        {
            var fileLinks = await Mediator.Send(request);
            return Ok(fileLinks);
        }

        /// <summary>
        /// Returns latest list materials.  
        /// </summary>
        /// <returns>List of latest materials.</returns>
        [AllowAnonymous, HttpGet("latest")]
        public async Task<IActionResult> GetLatestList()
        {
            var model = await CacheManager.GetOrCreateAsync(CacheKeysConstants.MaterialsLatest,
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
                    return Ok(await Mediator.Send(request));
                }
            }

            var model = await CacheManager.GetOrCreateAsync(CacheKeysConstants.MaterialsPinned,
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

            var model = await CacheManager.GetOrCreateAsync(CacheKeysConstants.Material + request.Id,
                async () => await Mediator.Send(request));
           
            return Ok(model);
        }

        /// <summary>
        /// Adds view to material.
        /// </summary>
        /// <param name="request">Material identifier.</param>
        /// <returns>Result of addition view.</returns>
        [AllowAnonymous, HttpPatch("{id:int}/read")]
        public async Task<IActionResult> AddReadAsync([FromRoute]AddMaterialReadCommand.Request request)
        {
            await Mediator.Send(request);
            UpdateMaterialCacheAddViewAsync(request.Id);
            return Ok(true);
        }

        /// <summary>
        /// Returns list of latest news with title and links to quick move to them from other materials.
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("others")]
        public async Task<IActionResult> GetOthers()
        {
            return Ok(await Mediator.Send(new GetOtherMaterialsListQuery.Request()));
        }

        private async void UpdateMaterialCacheAddViewAsync(int materialId)
        {
            var materialCache = await CacheManager.GetAsync<GetMaterialDetailQuery.Response>(CacheKeysConstants.Material + materialId);
            if (materialCache != null)
            {
                materialCache.Reads++;
                CacheManager.Set(CacheKeysConstants.Material + materialId, materialCache);
            }

            var materialsCache =
                await CacheManager.GetAsync<GetLatestMaterialsQuery.Response>(CacheKeysConstants.MaterialsLatest);

            var matIndex = materialsCache?.Results.FindIndex(x => x.Id == materialId);
            if (matIndex.HasValue && matIndex >= 0)
            {
                materialsCache.Results[matIndex.Value].Reads++;
                CacheManager.Set(CacheKeysConstants.MaterialsLatest, materialsCache);
            }

            var materialsPinnedCache =
                await CacheManager.GetAsync<GetPinnedMaterialsQuery.Response>(CacheKeysConstants.MaterialsPinned);

            var matPinnedIndex = materialsPinnedCache?.Results.FindIndex(x => x.Id == materialId);
            if (matPinnedIndex.HasValue && matPinnedIndex >= 0)
            {
                materialsPinnedCache.Results[matPinnedIndex.Value].Reads++;
                CacheManager.Set(CacheKeysConstants.MaterialsPinned, materialsPinnedCache);
            }
        }
    }
}