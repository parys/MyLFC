using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages wishes.
    /// </summary>
    [Authorize, Route("api/v1/[controller]")]
    public class WishController : Controller
    {
        private readonly IWishService _wishService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="wishService"></param>
        public WishController(IWishService wishService)
        {
            _wishService = wishService;
        }

        /// <summary>
        /// Creates new wish.
        /// </summary>
        /// <param name="dto">Filled dto for new wish.</param>
        /// <returns>Creation wish.</returns>
        [AllowAnonymous, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]WishDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var model = await _wishService.CreateAsync(dto);
            return Ok(model);
        }

        /// <summary>
        /// Deletes wish by id.
        /// </summary>
        /// <param name="id">The identifier of deleting wish.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpDelete("")]
        public async Task<IActionResult> DeleteAsync([FromQuery]int id)
        {
            var model = await _wishService.DeleteAsync(id);
            return Ok(model);
        }


        /// <summary>
        /// Returns list with wishes.
        /// </summary>
        /// <param name="page">The page of wish list.</param>
        /// <param name="typeId"></param>
        /// <param name="filterText"></param>
        /// <returns>Pageable wish list.</returns>
        [AllowAnonymous, HttpGet("List")]
        public async Task<IActionResult> GetListAsync([FromQuery]int page = 1, [FromQuery]int? typeId = null, [FromQuery]string filterText = null)
        {
            if (page < 1)
            {
                page = 1;
            }
            var model = await _wishService.GetListAsync(page, typeId, filterText);
            return Ok(model);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAsync([FromQuery]int id)
        {
            if (id < 1)
            {
                return BadRequest();
            }
            var model = await _wishService.GetAsync(id);
            return Ok(model);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("types")]
        public async Task<IActionResult> GetTypes()
        {
            var list = new List<object>();
            foreach (WishType type in Enum.GetValues(typeof(WishType)))
            {
                list.Add(new { id = type, name = type.GetNameAttribute() });
            }

            return Ok(await Task.FromResult(list));
        }
    }
}
