using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages matches.
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
    public class MatchController : Controller
    {
        private readonly IMatchService _matchService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="matchService"></param>
        public MatchController(IMatchService matchService)
        {
            _matchService = matchService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [Authorize(Roles = nameof(RolesEnum.AdminStart))]
        public async Task<IActionResult> CreateAsync(MatchDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _matchService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAsync(int id)
        {
            if (id < 1)
            {
                id = 1;
            }
            var result = await _matchService.GetAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [Route("list")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _matchService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("getTypes")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetTypes()
        {
            var list = new List<object>();
            foreach (MatchTypeEnum type in Enum.GetValues(typeof(MatchTypeEnum)))
            {
                list.Add(new { id = type, name = type.GetNameAttribute() });
            }
            return Ok(await Task.FromResult(list));
        }
    }
}
