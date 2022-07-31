using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches.Queries;

namespace MyLfc.Web.Mvc.Controllers;

/// <inheritdoc />
/// <summary>
/// Manages matches.
/// </summary>
[Route("[controller]")]
public class MatchesController : BaseController
{
    public IActionResult Index()
    {
        return View();
    }

    /// <summary>
    /// Shows detail match page.
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Detail([FromRoute]GetMatchDetailQuery.Request request)
    {
        var match = await Mediator.Send(request);
        if (match == null)
        {
            return RedirectToAction("Index", "Home");
        }
        return View(match);
    }
}