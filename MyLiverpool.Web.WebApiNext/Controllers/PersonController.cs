using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Web.WebApiNext.Controllers
{   
    /// <summary>
    /// Controller for manage persons.
    /// </summary>
    [Route("api/v1/[controller]")]
    public class PersonController : Controller
    {
        private readonly IPersonService _personService;

        /// <summary>
        /// Controller.
        /// </summary>
        /// <param name="personService"></param>
        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        /// <summary>
        /// Creates new person item.
        /// </summary>
        /// <param name="dto">New person model.</param>
        /// <returns>Created model.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]PersonDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _personService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Returns pageable person list.
        /// </summary>
        /// <param name="page">Current page.</param>
        /// <returns>Persons list.</returns>
        [Authorize, HttpGet("list/{page}")]
        public async Task<IActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _personService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// Returns club by id.
        /// </summary>
        /// <param name="id">The identifier of club.</param>
        /// <returns>Club.</returns>
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _personService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Updates club.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified club entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]PersonDto dto)
        {
            if (id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _personService.UpdateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Deletes club.
        /// </summary>
        /// <param name="id">The identifier of deleting club.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize, HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _personService.DeleteAsync(id);
            return Ok(result);
        }

    }
}
