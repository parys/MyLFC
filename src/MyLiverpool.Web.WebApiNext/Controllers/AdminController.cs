using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.HelpEntities;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Controller for manage admin functions.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class AdminController : BaseController
    {
        /// <summary>
        /// Updates epl table.
        /// </summary>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpGet("updateTable")]
        public async Task<IActionResult> UpdateEplTable()
        {
            var result = await Mediator.Send(new UpdateEplTableCommand.Request());
            CacheManager.SetString(GlobalConstants.HelperEntity + (int)HelperEntityType.EplTable, result.Result);
            return Ok(result);
        }
    }
}