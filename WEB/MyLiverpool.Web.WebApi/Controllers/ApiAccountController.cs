﻿using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/Account")]
    [Authorize]
    public class ApiAccountController : ApiController
    {
        private const string LocalLoginProvider = "Local";
        private ApplicationUserManager _userManager;
        private readonly IAccountService _accountService;

        public ApiAccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [Route("ChangePassword")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> ChangePassword(ChangePasswordDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await _accountService.ChangePasswordAsync(User.Identity.GetUserId<int>(), dto);
            return Ok(result);
        }

        [Route("ConfirmEmail")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<HttpResponseMessage> ConfirmEmail(int userId, string code)
        {
            if (userId <= 0 || code == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            var result = await _accountService.ConfirmEmailAsync(userId, code);
            if (result)
            {
                var response = Request.CreateResponse(HttpStatusCode.Moved);
                string fullyQualifiedUrl = Request.RequestUri.GetLeftPart(UriPartial.Authority);
                response.Headers.Location = new Uri(fullyQualifiedUrl + "/confirmed");
                return response;
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        [Route("ForgotPassword")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> ForgotPassword(string email)
        {
            if (email.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }

            var result = await _accountService.ForgotPasswordAsync(email);
            return Ok(result);
        }

        [Route("IsEmailUnique")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> IsEmailUnique(string email)
        {
            var result = await _accountService.IsEmailUniqueAsync(email);
            return Ok(result);
        }

        [Route("IsLogined")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> IsLogined()
        {
            await _accountService.UpdateLastModifiedAsync(User.Identity.GetUserId<int>());
            return Ok();
        }

        [Route("IsUserNameUnique")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> IsUserNameUnique(string userName)
        {
            var result = await _accountService.IsUserNameUniqueAsync(userName);
            return Ok(result);
        }

        [Route("Logout")]
        [HttpPost]
        [Authorize]
        public IHttpActionResult Logout()
        {
            Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            return Ok();
        }

        [Route("ResendConfirmEmail")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> ResendConfirmEmail(string email)
        {
            if (email.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }
            var result = await _accountService.ResendConfirmEmail(email);
            return Ok(result);
        }

        [Route("Register")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Register(RegisterUserDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _accountService.RegisterUserAsync(model);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        [Route("ResetPassword")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<HttpResponseMessage> ResetPassword(string code)
        {
            if (code.IsNullOrWhiteSpace())
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            var response = Request.CreateResponse(HttpStatusCode.Moved);
            string fullyQualifiedUrl = Request.RequestUri.GetLeftPart(UriPartial.Authority);
            response.Headers.Location = new Uri(fullyQualifiedUrl + "/resetPassword?code=" + code);
            return await Task.FromResult(response);
        }

        [Route("ResetPassword")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IHttpActionResult> ResetPassword(ResetPasswordDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await _accountService.ResetPasswordAsync(dto);
            return Ok(result);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && _userManager != null)
            {
                _userManager.Dispose();
                _userManager = null;
            }

            base.Dispose(disposing);
        }


        // GET api/Account/UserInfo
        //[HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        //[Route("UserInfo")]
        //public UserInfoViewModel GetUserInfo()
        //{
        //    ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

        //    return new UserInfoViewModel
        //    {
        //        Email = User.Identity.GetUserName(),
        //        HasRegistered = externalLogin == null,
        //        LoginProvider = externalLogin != null ? externalLogin.LoginProvider : null
        //    };
        //}

        // POST api/Account/Logout

        // GET api/Account/ManageInfo?returnUrl=%2F&generateState=true
        //[Route("ManageInfo")]
        //public async Task<ManageInfoViewModel> GetManageInfo(string returnUrl, bool generateState = false)
        //{
        //    User user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());

        //    if (user == null)
        //    {
        //        return null;
        //    }

        //    List<UserLoginInfoViewModel> logins = new List<UserLoginInfoViewModel>();

        //    foreach (UserLogin linkedAccount in user.Logins)
        //    {
        //        logins.Add(new UserLoginInfoViewModel
        //        {
        //            LoginProvider = linkedAccount.LoginProvider,
        //            ProviderKey = linkedAccount.ProviderKey
        //        });
        //    }

        //    if (user.PasswordHash != null)
        //    {
        //        logins.Add(new UserLoginInfoViewModel
        //        {
        //            LoginProvider = LocalLoginProvider,
        //            ProviderKey = user.UserName,
        //        });
        //    }

        //    return new ManageInfoViewModel
        //    {
        //        LocalLoginProvider = LocalLoginProvider,
        //        Email = user.UserName,
        //        Logins = logins,
        //        ExternalLoginProviders = GetExternalLogins(returnUrl, generateState)
        //    };
        //}

        //// POST api/Account/SetPassword
        //[Route("SetPassword")]
        //public async Task<IHttpActionResult> SetPassword(SetPasswordBindingModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    IdentityResult result = await UserManager.AddPasswordAsync(User.Identity.GetUserId<int>(), model.NewPassword);

        //    if (!result.Succeeded)
        //    {
        //        return GetErrorResult(result);
        //    }

        //    return Ok();
        //}

        //// POST api/Account/AddExternalLogin
        //[Route("AddExternalLogin")]
        //public async Task<IHttpActionResult> AddExternalLogin(AddExternalLoginBindingModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

        //    AuthenticationTicket ticket = AccessTokenFormat.Unprotect(model.ExternalAccessToken);

        //    if (ticket == null || ticket.Identity == null || (ticket.Properties != null
        //        && ticket.Properties.ExpiresUtc.HasValue
        //        && ticket.Properties.ExpiresUtc.Value < DateTimeOffset.UtcNow))
        //    {
        //        return BadRequest("External login failure.");
        //    }

        //    ExternalLoginData externalData = ExternalLoginData.FromIdentity(ticket.Identity);

        //    if (externalData == null)
        //    {
        //        return BadRequest("The external login is already associated with an account.");
        //    }

        //    IdentityResult result = await UserManager.AddLoginAsync(User.Identity.GetUserId<int>(),
        //        new UserLoginInfo(externalData.LoginProvider, externalData.ProviderKey));

        //    if (!result.Succeeded)
        //    {
        //        return GetErrorResult(result);
        //    }

        //    return Ok();
        //}

        //// POST api/Account/RemoveLogin
        //[Route("RemoveLogin")]
        //public async Task<IHttpActionResult> RemoveLogin(RemoveLoginBindingModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    IdentityResult result;

        //    if (model.LoginProvider == LocalLoginProvider)
        //    {
        //        result = await UserManager.RemovePasswordAsync(User.Identity.GetUserId<int>());
        //    }
        //    else
        //    {
        //        result = await UserManager.RemoveLoginAsync(User.Identity.GetUserId<int>(),
        //            new UserLoginInfo(model.LoginProvider, model.ProviderKey));
        //    }

        //    if (!result.Succeeded)
        //    {
        //        return GetErrorResult(result);
        //    }

        //    return Ok();
        //}

        //// GET api/Account/ExternalLogin
        ////[OverrideAuthentication]
        ////[HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        ////[AllowAnonymous]
        ////[Route("ExternalLogin", Name = "ExternalLogin")]
        ////public async Task<IHttpActionResult> GetExternalLogin(string provider, string error = null)
        ////{
        ////    if (error != null)
        ////    {
        ////        return Redirect(Url.Content("~/") + "#error=" + Uri.EscapeDataString(error));
        ////    }

        ////    if (!User.Identity.IsAuthenticated)
        ////    {
        ////        return new ChallengeResult(provider, this);
        ////    }

        ////    ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

        ////    if (externalLogin == null)
        ////    {
        ////        return InternalServerError();
        ////    }

        ////    if (externalLogin.LoginProvider != provider)
        ////    {
        ////        Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
        ////        return new ChallengeResult(provider, this);
        ////    }

        ////    User user = await UserManager.FindAsync(new UserLoginInfo(externalLogin.LoginProvider,
        ////        externalLogin.ProviderKey));

        ////    bool hasRegistered = user != null;

        ////    if (hasRegistered)
        ////    {
        ////        Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

        ////        ClaimsIdentity oAuthIdentity = await _userService.GenerateUserIdentityAsync(user,
        ////           OAuthDefaults.AuthenticationType);
        ////        ClaimsIdentity cookieIdentity = await _userService.GenerateUserIdentityAsync(user,
        ////            CookieAuthenticationDefaults.AuthenticationType);

        ////        var userRoles = await UserManager.GetRolesAsync(user.Id);

        ////        AuthenticationProperties properties = ApplicationOAuthProvider.CreateProperties(user.UserName, user.Id, userRoles);
        ////        Authentication.SignIn(properties, oAuthIdentity, cookieIdentity);
        ////    }
        ////    else
        ////    {
        ////        IEnumerable<Claim> claims = externalLogin.GetClaims();
        ////        ClaimsIdentity identity = new ClaimsIdentity(claims, OAuthDefaults.AuthenticationType);
        ////        Authentication.SignIn(identity);
        ////    }

        ////    return Ok();
        ////}

        //// GET api/Account/ExternalLogins?returnUrl=%2F&generateState=true
        //[AllowAnonymous]
        //[Route("ExternalLogins")]
        //public IEnumerable<ExternalLoginViewModel> GetExternalLogins(string returnUrl, bool generateState = false)
        //{
        //    IEnumerable<AuthenticationDescription> descriptions = Authentication.GetExternalAuthenticationTypes();
        //    List<ExternalLoginViewModel> logins = new List<ExternalLoginViewModel>();

        //    string state;

        //    if (generateState)
        //    {
        //        const int strengthInBits = 256;
        //        state = RandomOAuthStateGenerator.Generate(strengthInBits);
        //    }
        //    else
        //    {
        //        state = null;
        //    }

        //    foreach (AuthenticationDescription description in descriptions)
        //    {
        //        ExternalLoginViewModel login = new ExternalLoginViewModel
        //        {
        //            Name = description.Caption,
        //            Url = Url.Route("ExternalLogin", new
        //            {
        //                provider = description.AuthenticationType,
        //                response_type = "token",
        //                client_id = Startup.PublicClientId,
        //                redirect_uri = new Uri(Request.RequestUri, returnUrl).AbsoluteUri,
        //                state = state
        //            }),
        //            State = state
        //        };
        //        logins.Add(login);
        //    }

        //    return logins;
        //}

        // POST api/Account/RegisterExternal
        //[OverrideAuthentication]
        //[HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        //[Route("RegisterExternal")]
        //public async Task<IHttpActionResult> RegisterExternal(RegisterExternalBindingModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var info = await Authentication.GetExternalLoginInfoAsync();
        //    if (info == null)
        //    {
        //        return InternalServerError();
        //    }

        //    var user = new User() { UserName = model.Email, Email = model.Email };

        //    IdentityResult result = await UserManager.CreateAsync(user);
        //    if (!result.Succeeded)
        //    {
        //        return GetErrorResult(result);
        //    }

        //    result = await UserManager.AddLoginAsync(user.Id, info.Login);
        //    if (!result.Succeeded)
        //    {
        //        return GetErrorResult(result);
        //    }
        //    return Ok();
        //}

        #region Helpers

        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }

        private class ExternalLoginData
        {
            public string LoginProvider { get; set; }
            public string ProviderKey { get; set; }
            public string UserName { get; set; }

            public IList<Claim> GetClaims()
            {
                IList<Claim> claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.NameIdentifier, ProviderKey, null, LoginProvider));

                if (UserName != null)
                {
                    claims.Add(new Claim(ClaimTypes.Name, UserName, null, LoginProvider));
                }

                return claims;
            }

            public static ExternalLoginData FromIdentity(ClaimsIdentity identity)
            {
                if (identity == null)
                {
                    return null;
                }

                Claim providerKeyClaim = identity.FindFirst(ClaimTypes.NameIdentifier);

                if (providerKeyClaim == null || String.IsNullOrEmpty(providerKeyClaim.Issuer)
                    || String.IsNullOrEmpty(providerKeyClaim.Value))
                {
                    return null;
                }

                if (providerKeyClaim.Issuer == ClaimsIdentity.DefaultIssuer)
                {
                    return null;
                }

                return new ExternalLoginData
                {
                    LoginProvider = providerKeyClaim.Issuer,
                    ProviderKey = providerKeyClaim.Value,
                    UserName = identity.FindFirstValue(ClaimTypes.Name)
                };
            }
        }

        private static class RandomOAuthStateGenerator
        {
            private static RandomNumberGenerator _random = new RNGCryptoServiceProvider();

            public static string Generate(int strengthInBits)
            {
                const int bitsPerByte = 8;

                if (strengthInBits % bitsPerByte != 0)
                {
                    throw new ArgumentException("strengthInBits must be evenly divisible by 8.", "strengthInBits");
                }

                int strengthInBytes = strengthInBits / bitsPerByte;

                byte[] data = new byte[strengthInBytes];
                _random.GetBytes(data);
                return HttpServerUtility.UrlTokenEncode(data);
            }
        }

        #endregion
    }
}