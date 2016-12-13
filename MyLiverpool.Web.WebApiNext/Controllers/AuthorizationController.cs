using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Server;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Data.Entities;
using OpenIddict;
using System.Linq;
using AspNet.Security.OpenIdConnect.Primitives;
using OpenIddict.Core;
using OpenIddict.Models;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Controller for authorization actions.
    /// </summary>
    [AllowAnonymous]
    public class AuthorizationController : Controller
    {
        private readonly OpenIddictApplicationManager<OpenIddictApplication<int>> _applicationManager;
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="applicationManager"></param>
        /// <param name="signInManager"></param>
        /// <param name="userManager"></param>
        public AuthorizationController(
            OpenIddictApplicationManager<OpenIddictApplication<int>> applicationManager,
            SignInManager<User> signInManager,
            UserManager<User> userManager)
        {
            _applicationManager = applicationManager;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        /// <summary>
        /// Authorizes user by password grant type.
        /// </summary>
        /// <returns>Result of authentification.</returns>
        [HttpPost("~/connect/token")]
        public async Task<IActionResult> Exchange()
        {
            var request = HttpContext.GetOpenIdConnectRequest();

            if (request.IsPasswordGrantType())
            {
                var user =  await _userManager.FindByNameAsync(request.Username);
                if (user == null)
                {
                    return BadRequest(new OpenIdConnectResponse
                    {
                        Error = OpenIdConnectConstants.Errors.InvalidGrant,
                        ErrorDescription = "The username/password couple is invalid."
                    });
                }

                if (!await _userManager.CheckPasswordAsync(user, request.Password))
                {
                    if (_userManager.SupportsUserLockout)
                    {
                        await _userManager.AccessFailedAsync(user);
                    }

                    return BadRequest(new OpenIdConnectResponse
                    {
                        Error = OpenIdConnectConstants.Errors.InvalidGrant,
                        ErrorDescription = "The username/password couple is invalid."
                    });
                }

                if (!user.EmailConfirmed)
                {
                    return BadRequest("unconfirmed_email");
                }

                if (_userManager.SupportsUserLockout)
                {
                    await _userManager.ResetAccessFailedCountAsync(user);
                }

                var ticket = await CreateTicketAsync(request, user);

                return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
            }

            return BadRequest(new OpenIdConnectResponse
            {
                Error = OpenIdConnectConstants.Errors.UnsupportedGrantType,
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
            var request = HttpContext.GetOpenIdConnectRequest();
            
            var application = await _applicationManager.FindByClientIdAsync(request.ClientId, HttpContext.RequestAborted);
            if (application == null)
            {
                return BadRequest(OpenIdConnectConstants.Errors.InvalidClient);
            }
            
            // Retrieve the profile of the logged in user.
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return BadRequest(OpenIdConnectConstants.Errors.ServerError);
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
            return SignOut(OpenIdConnectServerDefaults.AuthenticationScheme);
        }

        private async Task<AuthenticationTicket> CreateTicketAsync(OpenIdConnectRequest request, User user)
        {
            // Set the list of scopes granted to the client application.
            // Note: the offline_access scope must be granted
            // to allow OpenIddict to return a refresh token.
            var scopes = new[]
            {
                OpenIdConnectConstants.Scopes.OpenId,
                OpenIdConnectConstants.Scopes.Email,
                OpenIdConnectConstants.Scopes.Profile,
                OpenIdConnectConstants.Scopes.OfflineAccess,
                OpenIddictConstants.Scopes.Roles
            };// .Intersect(request.GetScopes());

            // Create a new ClaimsPrincipal containing the claims that
            // will be used to create an id_token, a token or a code.
            var principal = await _signInManager.CreateUserPrincipalAsync(user);

            // Note: by default, claims are NOT automatically included in the access and identity tokens.
            // To allow OpenIddict to serialize them, you must attach them a destination, that specifies
            // whether they should be included in access tokens, in identity tokens or in both.

            foreach (var claim in principal.Claims)
            {
                // Always include the user identifier in the
                // access token and the identity token.
                if (claim.Type == ClaimTypes.NameIdentifier)
                {
                    claim.SetDestinations(OpenIdConnectConstants.Destinations.AccessToken,
                        OpenIdConnectConstants.Destinations.IdentityToken);
                }

                // Include the name claim, but only if the "profile" scope was requested.
                else if (claim.Type == ClaimTypes.Name && scopes.Contains(OpenIdConnectConstants.Scopes.Profile))
                {
                    claim.SetDestinations(OpenIdConnectConstants.Destinations.IdentityToken);
                }

                // Include the role claims, but only if the "roles" scope was requested.
                else if (claim.Type == ClaimTypes.Role && scopes.Contains(OpenIddictConstants.Scopes.Roles))
                {
                    claim.SetDestinations(OpenIdConnectConstants.Destinations.AccessToken,
                        OpenIdConnectConstants.Destinations.IdentityToken);
                }

                // The other claims won't be added to the access
                // and identity tokens and will be kept private.
            }

            List<Claim> roles = principal.Claims.Where(c => c.Type == ClaimTypes.Role).ToList();
            // Create a new authentication ticket holding the user identity.
            var ticket = new AuthenticationTicket(
                principal, new AuthenticationProperties()
                {
                    AllowRefresh = true,
                    ExpiresUtc = DateTimeOffset.Now.AddDays(14),
                    IsPersistent = true,
                    Items = { new KeyValuePair<string, string>(".roles", string.Join(", ", roles.Select(r => r.Value))) }
                },
                OpenIdConnectServerDefaults.AuthenticationScheme);

            // ticket.SetResources(request.GetResources());
            ticket.SetScopes(scopes);

            return ticket;
        }
    }
}
