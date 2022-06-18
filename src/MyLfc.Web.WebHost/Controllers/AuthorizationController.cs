using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MyLfc.Application.Users;
using MyLfc.Domain;
using OpenIddict.Abstractions;
using OpenIddict.Server.AspNetCore;
using static OpenIddict.Abstractions.OpenIddictConstants;

namespace MyLfc.Web.WebHost.Controllers
{

    /// <inheritdoc />
    /// <summary>
    /// Controller for authorization actions.
    /// </summary>
    [AllowAnonymous]
    public class AuthorizationController : BaseController
    {
        private readonly IOpenIddictApplicationManager _applicationManager;
        private readonly IOptions<IdentityOptions> _identityOptions;
        private readonly SignInManager<FullUser> _signInManager;
        private readonly UserManager<FullUser> _userManager;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="applicationManager"></param>
        /// <param name="signInManager"></param>
        /// <param name="userManager"></param>
        /// <param name="identityOptions"></param>
        public AuthorizationController(
            IOpenIddictApplicationManager applicationManager,
            SignInManager<FullUser> signInManager,
            UserManager<FullUser> userManager,
            IOptions<IdentityOptions> identityOptions)
        {
            _applicationManager = applicationManager;
            _signInManager = signInManager;
            _userManager = userManager;
            _identityOptions = identityOptions;
        }

        /// <summary>
        /// Authorizes user by password grant type.
        /// </summary>
        /// <returns>Result of authentication.</returns>
        [HttpPost("~/connect/token")]
        public async Task<IActionResult> Exchange()
        {
            var request = HttpContext.GetOpenIddictServerRequest() ??
                          throw new InvalidOperationException("The OpenID Connect request cannot be retrieved.");

            if (request.IsPasswordGrantType())
            {
                var user = await _userManager.FindByNameAsync(request.Username);
                if (user == null)
                {
                    return BadRequest(new 
                    {
                        Error = Errors.InvalidGrant,
                        ErrorDescription = "Пользователь с таким логином не зарегистрирован."
                    });
                }

                if (!user.EmailConfirmed)
                {
                    return BadRequest(new 
                    {
                        Error = "unconfirmed_email",
                        ErrorDescription = "Пользователь не подтвердил свой адрес электронной почты."
                    });
                }

                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
                if (!result.Succeeded)
                {
                    if (result.IsLockedOut)
                    {
                        var lockDate = await _userManager.GetLockoutEndDateAsync(user);
                        return BadRequest(new {
                            Error = Errors.AccessDenied,
                            ErrorDescription = "The user is locked out.",
                            ExpiresIn = lockDate.Value.ToUnixTimeMilliseconds()
                        });
                    }
                    return BadRequest(new 
                    {
                        Error = Errors.InvalidGrant,
                        ErrorDescription = "Вы ввели неправильно логин и/или пароль."
                    });

                }

                if (_userManager.SupportsUserLockout && !await _userManager.IsLockedOutAsync(user))
                {
                    await _userManager.ResetAccessFailedCountAsync(user);
                }
                
                var principal = await _signInManager.CreateUserPrincipalAsync(user);
                principal.SetScopes(request.GetScopes());
                principal.SetResources("api1");

                foreach (var claim in principal.Claims)
                {
                    claim.SetDestinations(GetDestinations(claim, principal));
                }

                return SignIn(principal, OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
            }
            else if (request.IsRefreshTokenGrantType()) //request.IsAuthorizationCodeGrantType() ||
            {
                // Retrieve the claims principal stored in the authorization code/refresh token.
             //   var info = await HttpContext.AuthenticateAsync(
             //       OpenIdConnectConstants.Schemes.Bearer);

                var principal = (await HttpContext.AuthenticateAsync(OpenIddictServerAspNetCoreDefaults.AuthenticationScheme)).Principal;

                // Retrieve the user profile corresponding to the authorization code/refresh token.
                // Note: if you want to automatically invalidate the authorization code/refresh token
                // when the user password/roles change, use the following line instead:
                // var user = _signInManager.ValidateSecurityStampAsync(info.Principal);
                var user = await _userManager.GetUserAsync(principal);
                if (user == null)
                {
                    return BadRequest(new
                    {
                        Error = Errors.InvalidGrant,
                        ErrorDescription = "The token is no longer valid."
                    });
                }

                // Ensure the user is still allowed to sign in.
                if (!await _signInManager.CanSignInAsync(user))
                {
                    return BadRequest(new
                    {
                        Error = Errors.InvalidGrant,
                        ErrorDescription = "The user is no longer allowed to sign in."
                    });
                }
                if (_userManager.SupportsUserLockout && await _userManager.IsLockedOutAsync(user))
                {
                    return BadRequest(new
                    {
                        Error = Errors.AccessDenied,
                        ErrorDescription = "The user is locked out."
                    });
                }
                // Create a new authentication ticket, but reuse the properties stored in the
                // authorization code/refresh token, including the scopes originally granted.
               // var ticket = await CreateTicketAsync(request, user);


                foreach (var claim in principal.Claims)
                {
                    claim.SetDestinations(GetDestinations(claim, principal));
                }
                await UpdateIpAddressForUser(user.Id);

                return SignIn(principal, OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
            }
            return BadRequest(new 
            {
                Error = Errors.UnsupportedGrantType,
                ErrorDescription = "The specified grant type is not supported."
            });
        }

        /// <summary>
        /// Authorizes user by implicit flow.
        /// </summary>
        /// <returns></returns>
        [Authorize, HttpGet, Route("~/connect/authorize")]
        public async Task<IActionResult> Authorize()
        {
            var request = HttpContext.GetOpenIddictServerRequest();
            
            var application = await _applicationManager.FindByClientIdAsync(request.ClientId, HttpContext.RequestAborted);
            if (application == null)
            {
                return BadRequest(Errors.InvalidClient);
            }
            
            // Retrieve the profile of the logged in user.
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return BadRequest(Errors.ServerError);
            }

            if (!user.EmailConfirmed)
            {
                return BadRequest("unconfirmed_email");
            }


            var ticket = await CreateTicketAsync(request, user);

            // Returning a SignInResult will ask OpenIddict to issue the appropriate access/identity tokens.
            return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
        }

        /// <summary>
        /// Logouts user.
        /// </summary>
        /// <returns>Result of signOut.</returns>
        [Authorize, HttpGet("~/connect/logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            // Returning a SignOutResult will ask OpenIddict to redirect the user agent
            // to the post_logout_redirect_uri specified by the client application.
            return SignOut(OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
        }

        private async Task<AuthenticationTicket> CreateTicketAsync(OpenIddictRequest request, FullUser user, AuthenticationProperties properties = null)
        {
            // Create a new ClaimsPrincipal containing the claims that
            // will be used to create an id_token, a token or a code.
            var principal = await _signInManager.CreateUserPrincipalAsync(user);

            var ticket = new AuthenticationTicket(principal, properties,
                OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);


            principal.SetScopes(request.GetScopes());
            principal.SetResources("api1");
            
            if (!request.IsAuthorizationCodeGrantType() && !request.IsRefreshTokenGrantType())
            {
                // Set the list of scopes granted to the client application.
                // Note: the offline_access scope must be granted
                // to allow OpenIddict to return a refresh token.
                principal.SetScopes(new[]
                {
                //    OpenIdConnectConstants.Scopes.OpenId,
                    Scopes.OfflineAccess,
                    Scopes.Roles
                }.Intersect(request.GetScopes()));
            }

            // Note: by default, claims are NOT automatically included in the access and identity tokens.
            // To allow OpenIddict to serialize them, you must attach them a destination, that specifies
            // whether they should be included in access tokens, in identity tokens or in both.

            foreach (var claim in ticket.Principal.Claims)
            {
                if (claim.Type == _identityOptions.Value.ClaimsIdentity.SecurityStampClaimType)
                {
                    continue;
                }
                var destinations = new List<string>
                {
                    Destinations.AccessToken
                };

                // Only add the iterated claim to the id_token if the corresponding scope was granted to the client application.
                // The other claims will only be added to the access_token, which is encrypted when using the default format.
                if ((claim.Type == Claims.Name && principal.HasScope(Scopes.Profile)) ||
                    (claim.Type == Claims.Email && principal.HasScope(Scopes.Email)) ||
                    (claim.Type == Claims.Role && principal.HasScope(Scopes.Roles)))
                {
                    // don't used destinations.Add(OpenIdConnectConstants.Destinations.IdentityToken);
                }

                claim.SetDestinations(destinations);
            }
            
            await UpdateIpAddressForUser(user.Id);

            return ticket;
        }

        private static IEnumerable<string> GetDestinations(Claim claim, ClaimsPrincipal principal)
        {
            // Note: by default, claims are NOT automatically included in the access and identity tokens.
            // To allow OpenIddict to serialize them, you must attach them a destination, that specifies
            // whether they should be included in access tokens, in identity tokens or in both.

            switch (claim.Type)
            {
                case Claims.Name:
                    yield return Destinations.AccessToken;

                    //  doesn't used  if (principal.HasScope(Scopes.Profile))
                    //         yield return Destinations.IdentityToken;

                    yield break;

                case Claims.Email:
                    yield return Destinations.AccessToken;

                    // doesn't used  if (principal.HasScope(Scopes.Email))
                    //       yield return Destinations.IdentityToken;

                    yield break;

                case Claims.Role:
                    yield return Destinations.AccessToken;

                   // doesn't used     if (principal.HasScope(Scopes.Roles))
                   //         yield return Destinations.IdentityToken;

                    yield break;

                // Never include the security stamp in the access and identity tokens, as it's a secret value.
                case "AspNet.Identity.SecurityStamp": yield break;

                default:
                    yield return Destinations.AccessToken;
                    yield break;
            }
        }

        private async Task UpdateIpAddressForUser(int userId)
        {
            var ip = HttpContext.Connection.RemoteIpAddress.ToString();
            await Mediator.Publish(new UpdateUserIpAddressCommand.Event {Ip = ip, UserId = userId});
        }
    }
}
