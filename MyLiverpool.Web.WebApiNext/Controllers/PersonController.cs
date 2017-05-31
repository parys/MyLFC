using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{   
    /// <summary>
    /// Controller for manage persons.
    /// </summary>
    [AllowAnonymous, Route("api/v1/[controller]")]
    public class PersonController : Controller
    {
        private readonly IPersonService _personService;
        private readonly IUploadService _uploadService;

        /// <summary>
        /// Controller.
        /// </summary>
        /// <param name="personService"></param>
        /// <param name="uploadService"></param>
        public PersonController(IPersonService personService, IUploadService uploadService)
        {
            _personService = personService;
            _uploadService = uploadService;
        }

        /// <summary>
        /// Creates new person item.
        /// </summary>
        /// <param name="dto">New person model.</param>
        /// <returns>Created model.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPost("")] //todo edit role for this
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
        [Authorize, HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery]int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _personService.GetListAsync(page);
            return Ok(result);
        }   
        
        /// <summary>
        /// Returns stuff list.
        /// </summary>
        /// <returns>Persons list.</returns>
        [AllowAnonymous, HttpGet("stuff")]
        public async Task<IActionResult> GetStuffListAsync()
        {
            var result = await _personService.GetStuffListAsync();
            return Ok(result);
        }

        /// <summary>
        /// Returns person by id.
        /// </summary>
        /// <param name="id">The identifier of person.</param>
        /// <returns>Person.</returns>
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _personService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Returns best player.
        /// </summary>
        /// <returns>Best player dto.</returns>
        [AllowAnonymous, HttpGet("bestPlayer")]
        public async Task<IActionResult> GetBestPlayerAsync()
        {
            var result = await _personService.GetBestPlayerAsync();
            return Ok(result);
        }

        /// <summary>
        /// Setups best player.
        /// </summary>
        /// <returns>True if setup successfully.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("bestPlayer/{personId:int}")] //todo change role
        public async Task<IActionResult> SetBestPlayerAsync(int personId)
        {
            await _personService.SetBestPlayerAsync(personId);
            return Ok(true);
        }

        /// <summary>
        /// Updates person.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified person entity.</param>
        /// <returns>Result of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("{id:int}")]
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
        /// Deletes person.
        /// </summary>
        /// <param name="id">The identifier of deleting person.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpDelete("{id:int}")] //todo edit role
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _personService.DeleteAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Gets person types.
        /// </summary>
        /// <returns>Person types list.</returns>
        [AllowAnonymous, HttpGet("types")]
        public async Task<IActionResult> GetTypesAsync()
        {
            var list = new List<object>();
            foreach (PersonType type in Enum.GetValues(typeof(PersonType)))
            {
                list.Add(new { id = type, name = type.GetNameAttribute() });
            }

            return Ok(await Task.FromResult(list));
        }
        
        /// <summary>
        /// Uploads a person photo.
        /// </summary>
        /// <returns>Result of uploading new photo.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPost("photo/{name}")]
        public async Task<ActionResult> UploadPhotoAsync(string name)
        {
            if (Request.Form.Files != null && Request.Form.Files.Count > 0)
            {
                    var file = Request.Form.Files[0];
                    var result = await _uploadService.UpdatePersonPhotoAsync(name, file);

                    return Ok(result);
            }
            return BadRequest();
        }


    }
}
