using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages matches.
    /// </summary>
    [Authorize, Route("api/v1/[controller]")]
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
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]MatchDto dto)
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
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            if (id < 1)
            {
                id = 1;
            }
            var result = await _matchService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [Authorize, HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery]int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _matchService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// Returns all types of matches.
        /// </summary>
        /// <returns>List of types.</returns>
        [Authorize, HttpGet("getTypes")]
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
