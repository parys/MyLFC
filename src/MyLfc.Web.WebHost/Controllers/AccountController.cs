using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.Account.Commands;
using MyLfc.Application.Features.Account.Queries;

namespace MyLfc.Web.WebHost.Controllers;

/// <summary>
/// Controller for manage user accounts.
/// </summary>
public class AccountController : BaseController
{
    /// <summary>
    /// Changes user password.
    /// </summary>
    /// <param name="request">Contains new and old passwords.</param>
    /// <returns></returns>
    [AllowAnonymous, HttpPut("ChangePassword")]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordCommand.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Result.Succeeded);
    }

    /// <summary>
    /// Confirms email.
    /// </summary>
    /// <param name="request">User id and confirmation code.</param>
    /// <returns>Returns confirmation result.</returns>
    [AllowAnonymous, HttpGet("ConfirmEmail")]
    public async Task<IActionResult> ConfirmEmail([FromQuery] ConfirmEmailCommand.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Result);
    }

    /// <summary>
    /// Sends recovery mail to email.
    /// </summary>
    /// <param name="request">Forgotten email.</param>
    /// <returns>Always returns true result.</returns>
    [AllowAnonymous, HttpGet("ForgotPassword")]
    public async Task<IActionResult> ForgotPassword([FromQuery] ForgotPasswordCommand.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Result);
    }

    /// <summary>
    /// Checks if email isn't already used.
    /// </summary>
    /// <param name="request">Verifiable email.</param>
    /// <returns>Result of checking.</returns>
    [AllowAnonymous, HttpGet("IsEmailUnique")]
    public async Task<IActionResult> IsEmailUnique([FromQuery] IsEmailUniqueQuery.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Result);
    }

    /// <summary>
    /// Checks if username isn't already used.
    /// </summary>
    /// <param name="request">Verifiable userName.</param>
    /// <returns>Result of checking.</returns>
    [AllowAnonymous, HttpGet("IsUsernameUnique")]
    public async Task<IActionResult> IsUsernameUnique([FromQuery] IsUserNameUniqueQuery.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Result);
    }

    /// <summary>
    /// Sends again confirmation email.
    /// </summary>
    /// <param name="request">User email.</param>
    /// <returns>Result of resend.</returns>
    [AllowAnonymous, HttpGet("ResendConfirmEmail")]
    public async Task<IActionResult> ResendConfirmEmail([FromQuery] ResendConfirmEmailCommand.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Result);
    }

    /// <summary>
    /// Registers new user local account.
    /// </summary>
    /// <param name="request">Register user model.</param>
    /// <returns>Result of registration.</returns>
    [AllowAnonymous, HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterUserCommand.Request request)
    {
        var result = await Mediator.Send(request);
        
        return Ok(result.Result.Succeeded);
    }

    /// <summary>
    /// Resets password by code.
    /// </summary>
    /// <param name="request">Reset password model.</param>
    /// <returns>Result of resetting password.</returns>
    [AllowAnonymous, HttpPut("ResetPassword")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordCommand.Request request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var result = await Mediator.Send(request);
        return Ok(result.Result);
    }
    
    
}