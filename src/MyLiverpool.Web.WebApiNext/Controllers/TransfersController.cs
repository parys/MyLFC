using System;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Transfers;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;
using Newtonsoft.Json;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages transfers.
    /// </summary>
    public class TransfersController : BaseController
    {
        /// <summary>
        /// Returns transfer by id.
        /// </summary>
        /// <param name="request">The identifier of transfer.</param>
        /// <returns>Found transfer by id.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync([FromRoute] GetTransferDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns filtered users list.
        /// </summary>
        /// <param name="dto">Filters.</param>
        /// <returns>List with users.</returns>
        [AllowAnonymous, HttpGet("{dto}")]
        [Obsolete("Remove after 15 July 19")]
        public async Task<IActionResult> List(string dto)
        {
            if (string.IsNullOrWhiteSpace(dto))
            {
                return BadRequest();
            }
            var obj = JsonConvert.DeserializeObject<TransferFiltersDto>(dto, new JsonSerializerSettings() //todo should be application wide settings
            {
                MissingMemberHandling = MissingMemberHandling.Ignore,
                NullValueHandling = NullValueHandling.Include,
                DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate
            });
            var request = new GetTransferListQuery.Request
            {
                CurrentPage = obj.Page ?? 1,
                PageSize = obj.ItemsPerPage,
                SortOn = obj.SortBy,
                SortDirection = obj.SortOrder == SortOrder.Ascending ? "ASC" : "DESC"
            };

            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns filtered users list.
        /// </summary>
        /// <param name="request">Filters.</param>
        /// <returns>List with users.</returns>
        [AllowAnonymous, HttpGet]
        [Obsolete("Remove after 15 July 19")]
        public async Task<IActionResult> List([FromQuery] GetTransferListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns transfers list for current moment.
        /// </summary>
        /// <returns>List with transfers.</returns>
        [AllowAnonymous, HttpGet("current")]
        public async Task<IActionResult> GetCurrentListAsync()
        {
            return Ok(await Mediator.Send(new GetCurrentTransferListQuery.Request()));
        }

        /// <summary>
        /// Creates new transfer.
        /// </summary>
        /// <param name="request">Filled transfer model.</param>
        /// <returns>Created entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateTransferCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates transfer.
        /// </summary>
        /// <param name="id">The identifier of entity.</param>
        /// <param name="request">Updated transfer dto.</param>
        /// <returns>Updated entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]UpdateTransferCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            return Ok(await Mediator.Send(request));
        }
    }
}
