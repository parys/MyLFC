using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages users.
    /// </summary>
    [Authorize, Route("api/v1/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly IUploadService _uploadService; //todo should call remove and method move to user service

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="userService"></param>
        /// <param name="uploadService"></param>
        public UserController(IUserService userService, IUploadService uploadService)
        {
            _userService = userService;
            _uploadService = uploadService;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Authorize, HttpGet("GetId")]
        public IActionResult GetId()
        {
            return Ok(User.GetUserId());
        }
        
        /// <summary>
        /// Returns user by id.
        /// </summary>
        /// <param name="id">The identifier of user.</param>
        /// <returns>Found user.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            if (id == 0)
            {
                id = User.GetUserId();
            }
            var user = await _userService.GetUserAsync(id);
            if (!User.IsInRole(nameof(RolesEnum.AdminFull)) && !User.IsInRole(nameof(RolesEnum.AdminStart)))
            {
                user.Email = string.Empty;
            }
            return Json(user);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("list/{dto}")]
        public async Task<IActionResult> List(string dto)
        {
            if (dto == null)
            {
                return BadRequest();
            }
            UserFiltersDto obj = Newtonsoft.Json.JsonConvert.DeserializeObject<UserFiltersDto>(dto); 
            var model = await _userService.GetUsersDtoAsync(obj);
            return Json(model);
        }

        /// <summary>
        /// Updates user group.
        /// </summary>
        /// <param name="userId">The identifier of updatable user.</param>
        /// <param name="roleGroupId">New role group id.</param>
        /// <returns>Result of updating role group.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("updateRoleGroup/{userId:int}/{roleGroupId:int}")]
        public async Task<IActionResult> UpdateRole(int userId, int roleGroupId)
        {
            if (userId == User.GetUserId())
            {
                return BadRequest("Cannot update role by self.");
            }
            var result = await _userService.EditRoleGroupAsync(userId, roleGroupId);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="typed"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("GetUserNames")]
        public async Task<IActionResult> GetUserNames([FromQuery]string typed)
        {
            var result = await _userService.GetUserNamesAsync(typed);
           //bug var userId = User.GetUserId();
           // result = result.Where(x => x.Id != userId);
            return Ok(result);
        }

        /// <summary>
        /// Bans user.
        /// </summary>
        /// <param name="userId">The identifier of blocking user.</param>
        /// <param name="daysCount"></param>
        /// <returns>Result of block user.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserStart)), HttpPut("Ban/{userId:int}/{daysCount:int}")]
        public async Task<IActionResult> BanUser(int userId, int daysCount)
        {
            var result = await _userService.BanUser(userId, daysCount);
            return Ok(result);
        }

        /// <summary>
        /// Unbans user.
        /// </summary>
        /// <param name="userId">The identifier of unblocking user.</param>
        /// <returns>Result of unblocking user.</returns>
        [Authorize(Roles = nameof(RolesEnum.UserFull)), HttpPut("Unban/{userId:int}")]
        public async Task<IActionResult> UnbanUser(int userId)
        {
            var result = await _userService.UnbanUser(userId);
            return Ok(result);
        }

        // <param name="userId">The identifier of updatable user.</param>
        /// <summary>
        /// Uploads a new user's avatar.
        /// </summary>
        /// <returns>Result of uploading new avatar.</returns>
        [Authorize, HttpPost("avatar")]
        public async Task<ActionResult> UploadAvatarAsync()
        {
            if (Request.Form.Files != null && Request.Form.Files.Count > 0)
            {
                //  if (HttpContext.Current.Request.Files !=.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    var result = await _uploadService.UpdateAvatarAsync(User.GetUserId(), file);

                    return Ok(result);
                }
            }
            return BadRequest();
        }

        /// <summary>
        /// Resets user's avatar to default.
        /// </summary>
        /// <param name="userId">The identifier of resetting avatar user.</param>
        /// <returns>New user photo path.</returns>
        [Authorize, HttpPut("avatar/{userId:int}/reset")]
        public async Task<ActionResult> ResetAvatarAsync(int userId)
        {
            if (!User.IsInRole(nameof(RolesEnum.UserStart)) && User.GetUserId() != userId)
            {
                return StatusCode((int)HttpStatusCode.Forbidden);
            }
            var result = await _userService.ResetAvatarAsync(userId);
            return Ok(result);
        }
    }
}
