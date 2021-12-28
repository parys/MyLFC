using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Wishes;
using MyLfc.Common.Utilities.Extensions;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages wishes.
    /// </summary>
    public class WishesController : BaseController
    {
        /// <summary>
        /// Creates new wish.
        /// </summary>
        /// <param name="request">Filled dto for new wish.</param>
        /// <returns>Creation wish.</returns>
        [AllowAnonymous, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateWishCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates wish.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="request">Modified wish entity.</param>
        /// <returns>Result of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]UpdateWishCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Deletes wish by id.
        /// </summary>
        /// <param name="request">The identifier of deleting wish.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpDelete("")]
        public async Task<IActionResult> DeleteAsync([FromRoute]DeleteWishCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns wishes list by filter.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> List([FromQuery] GetWishListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns wish by id.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute]GetWishDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Gets wish types.
        /// </summary>
        /// <returns>Wish types list.</returns>
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
        
        /// <summary>
        /// Gets wish states.
        /// </summary>
        /// <returns>Wish states list.</returns>
        [AllowAnonymous, HttpGet("states")]
        public async Task<IActionResult> GetStates()
        {
            var list = new List<object>();
            foreach (WishStateEnum type in Enum.GetValues(typeof(WishStateEnum)))
            {
                list.Add(new { id = type, name = type.GetNameAttribute() });
            }
            return Ok(await Task.FromResult(list));
        }
    }
}
