using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Providers
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        private readonly string _publicClientId;

        private IUserService _userService;
        private IUnitOfWork _unitOfWork = new UnitOfWork(); //todo remove

        public ApplicationOAuthProvider(string publicClientId, IUnitOfWork unitOfWork, IMapper mapper)
        {
            if (publicClientId == null)
            {
                throw new ArgumentNullException(nameof(publicClientId));
            }

            _publicClientId = publicClientId;
            _userService = new UserService(unitOfWork, mapper); //todo move
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            
            User user = await _unitOfWork.UserManager.FindAsync(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }
            user.LastModified = DateTime.Now;
            await _unitOfWork.UserManager.UpdateAsync(user);
            await _unitOfWork.SaveAsync();


            try
            {
                ClaimsIdentity oAuthIdentity = await _userService.GenerateUserIdentityAsync(user,
                    OAuthDefaults.AuthenticationType);
                ClaimsIdentity cookiesIdentity = await _userService.GenerateUserIdentityAsync(user,
                    CookieAuthenticationDefaults.AuthenticationType);
                var userRoles = await _unitOfWork.UserManager.GetRolesAsync(user.Id);

                AuthenticationProperties properties = CreateProperties(user, userRoles);
                AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);
                context.Validated(ticket);
                context.Request.Context.Authentication.SignIn(cookiesIdentity);
            }
            catch (Exception ex)
            {
                throw new AppDomainUnloadedException();
            }
            
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            // Resource owner password credentials does not provide a client ID.
            if (context.ClientId == null)
            {
                context.Validated();
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientRedirectUri(OAuthValidateClientRedirectUriContext context)
        {
            if (context.ClientId == _publicClientId)
            {
                Uri expectedRootUri = new Uri(context.Request.Uri, "/");

                if (expectedRootUri.AbsoluteUri == context.RedirectUri)
                {
                    context.Validated();
                }
            }

            return Task.FromResult<object>(null);
        }

        public static AuthenticationProperties CreateProperties(User user, IList<string> roles)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", user.UserName },
                { "id", user.Id.ToString() },
                { "roles", string.Join(", ", roles) },
                { "userImage", user.Photo ?? string.Empty }
            };
            return new AuthenticationProperties(data);
        }
    }
}