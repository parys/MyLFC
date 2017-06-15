using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages transfers.
    /// </summary>
    [Authorize, Route("api/v1/[controller]")]
    public class TransferController : Controller
    {
        private readonly ITransferService _transferService; 

        /// <summary>
        /// Controller.
        /// </summary>
        /// <param name="transferService"></param>
        public TransferController(ITransferService transferService)
        {
            _transferService = transferService;
        }
        /// <summary>
        /// Returns transfers list.
        /// </summary>
        /// <returns>List with transfers.</returns>
        [AllowAnonymous, HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery]int page)
        {
            var result = await _transferService.GetListAsync(page);
            return Json(result);
        }

        /// <summary>
        /// Creates new transfer.
        /// </summary>
        /// <param name="dto">Filled transfer model.</param>
        /// <returns>Created entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]TransferDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _transferService.CreateAsync(dto);
         //   RemoveCalendarFromCache();
            return Ok(result);
        }

        /// <summary>
        /// Updates transfer.
        /// </summary>
        /// <param name="id">The identifier of entity.</param>
        /// <param name="dto">Updated transfer dto.</param>
        /// <returns>Updated entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]TransferDto dto)
        {
            if (!ModelState.IsValid || id != dto.Id)
            {
                return BadRequest();
            }
            var result = await _transferService.UpdateAsync(dto);
          //  RemoveCalendarFromCache();
            return Ok(result);
        }
    }
}
