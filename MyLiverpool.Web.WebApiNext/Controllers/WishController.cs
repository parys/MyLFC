using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages wishes.
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
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
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [AllowAnonymous]
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
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpDelete]
        [Authorize(Roles = "AdminStart")]
        public async Task<IActionResult> DeleteAsync(int? id)
        {
            if (!id.HasValue)
            {
                return BadRequest();
            }
            var model = await _wishService.DeleteAsync(id.Value);
            return Ok(model);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <param name="typeId"></param>
        /// <param name="filterText"></param>
        /// <returns></returns>
        [Route("List")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetListAsync(int page = 1, int? typeId = null, string filterText = null)
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
        public async Task<IActionResult> GetAsync(int id)
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
        [Route("types")]
        [HttpGet]
        [AllowAnonymous]
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
