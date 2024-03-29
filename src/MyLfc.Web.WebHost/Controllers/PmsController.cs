﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.Pms.Commands;
using MyLfc.Application.Features.Pms.Queries;

namespace MyLfc.Web.WebHost.Controllers;

/// <summary>
/// Manages private messages.
/// </summary>
public class PmsController : BaseController
{
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    [Authorize, HttpGet("")]
    public async Task<IActionResult> GetPms()
    {
        return Ok(await Mediator.Send(new GetPmListQuery.Request()));
    }

    /// <summary>
    /// Returns detailed pm.
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    [Authorize, HttpGet("{id:int}")]
    public async Task<IActionResult> GetAsync([FromRoute] GetPmDetailQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }


    /// <summary>
    /// Creates new private message.
    /// </summary>
    /// <param name="request">Private message model.</param>
    /// <returns>Is created successfully.</returns>
    [Authorize, HttpPost("")]
    public async Task<IActionResult> CreateAsync([FromBody]CreatePmCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }
    
    /// <summary>
    /// Returns count of unread messages.
    /// </summary>
    /// <returns>Count of unread messages.</returns>
    [Authorize, HttpGet("unread")]
    public async Task<IActionResult> GetUnreadCount()
    {
        var result = await Mediator.Send(new GetUnreadPmCountQuery.Request());
        return Ok(result.Result);
    }
}
