using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Common.Utilities.Extensions;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/match")]
    [Authorize]
    public class MatchController : ApiController
    {
        private readonly IMatchService _matchService;

        public MatchController(IMatchService matchService)
        {
            _matchService = matchService;
        }

        [Route]
        [HttpPost]
        [Authorize(Roles = nameof(RolesEnum.AdminStart))]
        public async Task<IHttpActionResult> CreateAsync(MatchDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _matchService.CreateAsync(dto);
            return Ok(result);
        }

        [Route]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetAsync(int id)
        {
            if (id < 1)
            {
                id = 1;
            }
            var result = await _matchService.GetAsync(id);
            return Ok(result);
        }

        [Route("list")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _matchService.GetListAsync(page);
            return Ok(result);
        }

        [Route("getTypes")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetTypes()
        {
            var list = new List<object>();
            foreach (MatchTypeEnum type in Enum.GetValues(typeof(MatchTypeEnum)))
            {
                list.Add(new {id = type, name = type.GetNameAttribute()});
            }
            return Ok(await Task.FromResult(list));
        }
    }
}
