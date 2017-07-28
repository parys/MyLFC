using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages Loans.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), Route("api/v1/[controller]")]
    public class LoanController: Controller
    {
        private readonly ILoanService _loanService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="loanService"></param>
        public LoanController(ILoanService loanService)
        {
            _loanService = loanService;
        }

        /// <summary>
        /// Creates new loan item.
        /// </summary>
        /// <param name="dto">New loan model.</param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]LoanDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _loanService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Returns pageable loan list.
        /// </summary>
        /// <param name="page">Current page.</param>
        /// <returns>Loans list.</returns>
        [AllowAnonymous, HttpGet("list/{page}")]
        public async Task<IActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _loanService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// Returns loan by id.
        /// </summary>
        /// <param name="id">The identifier of loan.</param>
        /// <returns>Loan model.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _loanService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Updates loan.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified loan entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]LoanDto dto)
        {
            if (id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _loanService.UpdateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Deletes loan.
        /// </summary>
        /// <param name="id">The identifier of deleting loan.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _loanService.DeleteAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Returns loans list for current moment.
        /// </summary>
        /// <returns>List with loans.</returns>
        [AllowAnonymous, HttpGet("current")]
        public async Task<IActionResult> GetCurrentListAsync()
        {
            var result = await _loanService.GetCurrentListAsync();
            return Json(result);
        }
    }
}
