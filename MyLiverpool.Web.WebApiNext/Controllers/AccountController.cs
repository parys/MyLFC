using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Controller for manage user accounts.
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
    public class AccountController : Controller
    {
        private const string LocalLoginProvider = "Local";
        private readonly IAccountService _accountService;

        /// <summary>
        /// Controller.
        /// </summary>
        /// <param name="accountService">Injecting accountService.</param>
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [Route("ChangePassword")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ChangePassword(ChangePasswordDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await _accountService.ChangePasswordAsync(User.GetUserId(), dto);
            return Ok(result);
        }

        /// <summary>
        /// Confirms email.
        /// </summary>
        /// <param name="userId">User id.</param>
        /// <param name="code">Secret code.</param>
        /// <returns>Returns confirmation result.</returns>
        [Route("ConfirmEmail")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(int userId, string code)
        {
            if (userId <= 0 || code == null)
            {
                return new BadRequestResult();
            }
            var result = await _accountService.ConfirmEmailAsync(userId, code);
            return Ok(result);
        }

        /// <summary>
        /// Sends recovery mail to email.
        /// </summary>
        /// <param name="email">Forgetable email.</param>
        /// <returns>Always returns true result.</returns>
        [Route("ForgotPassword")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest();
            }

            var result = await _accountService.ForgotPasswordAsync(email);
            return Ok(true);
        }

        [Route("IsEmailUnique")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> IsEmailUnique(string email)
        {
            var result = await _accountService.IsEmailUniqueAsync(email);
            return Ok(result);
        }

        [Route("IsLogined")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> IsLogined()
        {
            await _accountService.UpdateLastModifiedAsync(User.GetUserId());
            return Ok();
        }

        [Route("IsUserNameUnique")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> IsUserNameUnique(string userName)
        {
            var result = await _accountService.IsUserNameUniqueAsync(userName);
            return Ok(result);
        }

        [Route("ResendConfirmEmail")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ResendConfirmEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest();
            }
            var result = await _accountService.ResendConfirmEmail(email);
            return Ok(result);
        }

        [Route("Register")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _accountService.RegisterUserAsync(dto);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        //[Route("ResetPassword")] //todo
        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<HttpResponseMessage> ResetPassword(string code)
        //{
        //    if (string.IsNullOrEmpty(code))
        //    {
        //        return new HttpResponseMessage(HttpStatusCode.BadRequest);
        //    }
        //    var response = Request.CreateResponse(HttpStatusCode.Moved);
        //    string fullyQualifiedUrl = Request.RequestUri.GetLeftPart(UriPartial.Authority);
        //    response.Headers.Location = new Uri(fullyQualifiedUrl + "/resetPassword?code=" + code);
        //    return await Task.FromResult(response);
        //}

        [Route("ResetPassword")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await _accountService.ResetPasswordAsync(dto);
            return Ok(result);
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
        

        //        //
        //        // GET: /Manage/Index
        //        public async Task<ActionResult> Index(ManageMessageId? message)
        //        {
        //            ViewBag.StatusMessage =
        //                message == ManageMessageId.ChangePasswordSuccess ? "Your password has been changed."
        //                : message == ManageMessageId.SetPasswordSuccess ? "Your password has been set."
        //                : message == ManageMessageId.SetTwoFactorSuccess ? "Your two-factor authentication provider has been set."
        //                : message == ManageMessageId.Error ? "An error has occurred."
        //                : message == ManageMessageId.AddPhoneSuccess ? "Your phone number was added."
        //                : message == ManageMessageId.RemovePhoneSuccess ? "Your phone number was removed."
        //                : "";

        //            var userId = User.Identity.GetUserId<int>();
        //            var model = new IndexViewModel
        //            {
        //                HasPassword = HasPassword(),
        //                PhoneNumber = await UserManager.GetPhoneNumberAsync(userId),
        //                TwoFactor = await UserManager.GetTwoFactorEnabledAsync(userId),
        //                Logins = await UserManager.GetLoginsAsync(userId),
        //                BrowserRemembered = await AuthenticationManager.TwoFactorBrowserRememberedAsync(userId.ToString())
        //            };
        //            return View(model);
        //        }

        //        //
        //        // POST: /Manage/RemoveLogin
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        public async Task<ActionResult> RemoveLogin(string loginProvider, string providerKey)
        //        {
        //            ManageMessageId? message;
        //            var result = await UserManager.RemoveLoginAsync(User.Identity.GetUserId<int>(), new UserLoginInfo(loginProvider, providerKey));
        //            if (result.Succeeded)
        //            {
        //                var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //                if (user != null)
        //                {
        //                    await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //                }
        //                message = ManageMessageId.RemoveLoginSuccess;
        //            }
        //            else
        //            {
        //                message = ManageMessageId.Error;
        //            }
        //            return RedirectToAction("ManageLogins", new { Message = message });
        //        }

        //        //
        //        // GET: /Manage/AddPhoneNumber
        //        public ActionResult AddPhoneNumber()
        //        {
        //            return View();
        //        }

        //        //
        //        // POST: /Manage/AddPhoneNumber
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        public async Task<ActionResult> AddPhoneNumber(AddPhoneNumberViewModel model)
        //        {
        //            if (!ModelState.IsValid)
        //            {
        //                return View(model);
        //            }
        //            // Generate the token and send it
        //            var code = await UserManager.GenerateChangePhoneNumberTokenAsync(User.Identity.GetUserId<int>(), model.Number);
        //            if (UserManager.SmsService != null)
        //            {
        //                var message = new IdentityMessage
        //                {
        //                    Destination = model.Number,
        //                    Body = "Your security code is: " + code
        //                };
        //                await UserManager.SmsService.SendAsync(message);
        //            }
        //            return RedirectToAction("VerifyPhoneNumber", new { PhoneNumber = model.Number });
        //        }

        //        //
        //        // POST: /Manage/EnableTwoFactorAuthentication
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        public async Task<ActionResult> EnableTwoFactorAuthentication()
        //        {
        //            await UserManager.SetTwoFactorEnabledAsync(User.Identity.GetUserId<int>(), true);
        //            var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //            if (user != null)
        //            {
        //                await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //            }
        //            return RedirectToAction("Index", "Manage");
        //        }

        //        //
        //        // POST: /Manage/DisableTwoFactorAuthentication
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        public async Task<ActionResult> DisableTwoFactorAuthentication()
        //        {
        //            await UserManager.SetTwoFactorEnabledAsync(User.Identity.GetUserId<int>(), false);
        //            var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //            if (user != null)
        //            {
        //                await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //            }
        //            return RedirectToAction("Index", "Manage");
        //        }

        //        //
        //        // GET: /Manage/VerifyPhoneNumber
        //        public async Task<ActionResult> VerifyPhoneNumber(string phoneNumber)
        //        {
        //            var code = await UserManager.GenerateChangePhoneNumberTokenAsync(User.Identity.GetUserId<int>(), phoneNumber);
        //            // Send an SMS through the SMS provider to verify the phone number
        //            return phoneNumber == null ? View("Error") : View(new VerifyPhoneNumberViewModel { PhoneNumber = phoneNumber });
        //        }

        //        //
        //        // POST: /Manage/VerifyPhoneNumber
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        public async Task<ActionResult> VerifyPhoneNumber(VerifyPhoneNumberViewModel model)
        //        {
        //            if (!ModelState.IsValid)
        //            {
        //                return View(model);
        //            }
        //            var result = await UserManager.ChangePhoneNumberAsync(User.Identity.GetUserId<int>(), model.PhoneNumber, model.Code);
        //            if (result.Succeeded)
        //            {
        //                var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //                if (user != null)
        //                {
        //                    await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //                }
        //                return RedirectToAction("Index", new { Message = ManageMessageId.AddPhoneSuccess });
        //            }
        //            // If we got this far, something failed, redisplay form
        //            ModelState.AddModelError("", "Failed to verify phone");
        //            return View(model);
        //        }

        //        //
        //        // GET: /Manage/RemovePhoneNumber
        //        public async Task<ActionResult> RemovePhoneNumber()
        //        {
        //            var result = await UserManager.SetPhoneNumberAsync(User.Identity.GetUserId<int>(), null);
        //            if (!result.Succeeded)
        //            {
        //                return RedirectToAction("Index", new { Message = ManageMessageId.Error });
        //            }
        //            var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //            if (user != null)
        //            {
        //                await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //            }
        //            return RedirectToAction("Index", new { Message = ManageMessageId.RemovePhoneSuccess });
        //        }

        //        //
        //        // GET: /Manage/SetPassword
        //        public ActionResult SetPassword()
        //        {
        //            return View();
        //        }

        //        //
        //        // POST: /Manage/SetPassword
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        public async Task<ActionResult> SetPassword(SetPasswordViewModel model)
        //        {
        //            if (ModelState.IsValid)
        //            {
        //                var result = await UserManager.AddPasswordAsync(User.Identity.GetUserId<int>(), model.NewPassword);
        //                if (result.Succeeded)
        //                {
        //                    var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //                    if (user != null)
        //                    {
        //                        await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //                    }
        //                    return RedirectToAction("Index", new { Message = ManageMessageId.SetPasswordSuccess });
        //                }
        //                AddErrors(result);
        //            }

        //            // If we got this far, something failed, redisplay form
        //            return View(model);
        //        }

        //        //
        //        // GET: /Manage/ManageLogins
        //        public async Task<ActionResult> ManageLogins(ManageMessageId? message)
        //        {
        //            ViewBag.StatusMessage =
        //                message == ManageMessageId.RemoveLoginSuccess ? "The external login was removed."
        //                : message == ManageMessageId.Error ? "An error has occurred."
        //                : "";
        //            var user = await UserManager.FindByIdAsync(User.Identity.GetUserId<int>());
        //            if (user == null)
        //            {
        //                return View("Error");
        //            }
        //            var userLogins = await UserManager.GetLoginsAsync(User.Identity.GetUserId<int>());
        //            var otherLogins = AuthenticationManager.GetExternalAuthenticationTypes().Where(auth => userLogins.All(ul => auth.AuthenticationType != ul.LoginProvider)).ToList();
        //            ViewBag.ShowRemoveButton = user.PasswordHash != null || userLogins.Count > 1;
        //            return View(new ManageLoginsViewModel
        //            {
        //                CurrentLogins = userLogins,
        //                OtherLogins = otherLogins
        //            });
        //        }

        //        //
        //        //// POST: /Manage/LinkLogin
        //        //[HttpPost]
        //        //[ValidateAntiForgeryToken]
        //        //public ActionResult LinkLogin(string provider)
        //        //{
        //        //    // Request a redirect to the external login provider to link a login for the current user
        //        //    return new AccountController.ChallengeResult(provider, Url.Action("LinkLoginCallback", "Manage"), User.Identity.GetUserId());
        //        //}

        //        //
        //        // GET: /Manage/LinkLoginCallback
        //        public async Task<ActionResult> LinkLoginCallback()
        //        {
        //            var loginInfo = await AuthenticationManager.GetExternalLoginInfoAsync(XsrfKey, User.Identity.GetUserId());
        //            if (loginInfo == null)
        //            {
        //                return RedirectToAction("ManageLogins", new { Message = ManageMessageId.Error });
        //            }
        //            var result = await UserManager.AddLoginAsync(User.Identity.GetUserId<int>(), loginInfo.Login);
        //            return result.Succeeded ? RedirectToAction("ManageLogins") : RedirectToAction("ManageLogins", new { Message = ManageMessageId.Error });
        //        }

        //        protected override void Dispose(bool disposing)
        //        {
        //            if (disposing && _userManager != null)
        //            {
        //                _userManager.Dispose();
        //                _userManager = null;
        //            }

        //            base.Dispose(disposing);
        //        }

        //#region Helpers
        //        // Used for XSRF protection when adding external logins
        //        private const string XsrfKey = "XsrfId";

        //        private IAuthenticationManager AuthenticationManager
        //        {
        //            get
        //            {
        //                return HttpContext.GetOwinContext().Authentication;
        //            }
        //        }

        //        private void AddErrors(IdentityResult result)
        //        {
        //            foreach (var error in result.Errors)
        //            {
        //                ModelState.AddModelError("", error);
        //            }
        //        }

        //        private bool HasPassword()
        //        {
        //            var user = UserManager.FindById(User.Identity.GetUserId<int>());
        //            if (user != null)
        //            {
        //                return user.PasswordHash != null;
        //            }
        //            return false;
        //        }

        //        private bool HasPhoneNumber()
        //        {
        //            var user = UserManager.FindById(User.Identity.GetUserId<int>());
        //            if (user != null)
        //            {
        //                return user.PhoneNumber != null;
        //            }
        //            return false;
        //        }

        //        public enum ManageMessageId
        //        {
        //            AddPhoneSuccess,
        //            ChangePasswordSuccess,
        //            SetTwoFactorSuccess,
        //            SetPasswordSuccess,
        //            RemoveLoginSuccess,
        //            RemovePhoneSuccess,
        //            Error
        //        }

        //#endregion
        //    }

        //[AllowAnonymous]
        //public async Task<ActionResult> Lockout(string userName)
        //{
        //    if (userName.IsNullOrWhiteSpace())
        //    {
        //        return RedirectToAction("Index", "Home");
        //    }
        //    var model = await _accountService.GetLockOutEndDateAsync(userName);
        //    return View(model);
        //}

        ////
        //// GET: /Account/VerifyCode
        //[AllowAnonymous]
        //public async Task<ActionResult> VerifyCode(string provider, string returnUrl, bool rememberMe)
        //{
        //    // Require that the user has already logged in via username/password or external login
        //    if (!await SignInManager.HasBeenVerifiedAsync())
        //    {
        //        return View("Error");
        //    }
        //    return View(new VerifyCodeViewModel { Provider = provider, ReturnUrl = returnUrl, RememberMe = rememberMe });
        //}

        ////
        //// POST: /Account/VerifyCode
        //[HttpPost]
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public async Task<ActionResult> VerifyCode(VerifyCodeViewModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return View(model);
        //    }

        //    // The following code protects for brute force attacks against the two factor codes. 
        //    // If a user enters incorrect codes for a specified amount of time then the user account 
        //    // will be locked out for a specified amount of time. 
        //    // You can configure the account lockout settings in IdentityConfig
        //    var result = await SignInManager.TwoFactorSignInAsync(model.Provider, model.Code, isPersistent: model.RememberMe, rememberBrowser: model.RememberBrowser);
        //    switch (result)
        //    {
        //        case SignInStatus.Success:
        //            return RedirectToLocal(model.ReturnUrl);
        //        case SignInStatus.LockedOut:
        //            return View("Lockout");
        //        case SignInStatus.Failure:
        //        default:
        //            ModelState.AddModelError("", "Invalid code.");
        //            return View(model);
        //    }
        //}

        ////
        //// POST: /Account/ExternalLogin
        //[HttpPost]
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public ActionResult ExternalLogin(string provider, string returnUrl)
        //{
        //    // Request a redirect to the external login provider
        //    return new ChallengeResult(provider, Url.Action("ExternalLoginCallback", "Account", new { ReturnUrl = returnUrl }));
        //}

        ////
        //// GET: /Account/SendCode
        //[AllowAnonymous]
        //public async Task<ActionResult> SendCode(string returnUrl, bool rememberMe)
        //{
        //    var userId = await SignInManager.GetVerifiedUserIdAsync();
        //    if (userId <= 0)
        //    {
        //        return View("Error");
        //    }
        //    var userFactors = await UserManager.GetValidTwoFactorProvidersAsync(userId);
        //    var factorOptions = userFactors.Select(purpose => new SelectListItem { Text = purpose, Value = purpose }).ToList();
        //    return View(new SendCodeViewModel { Providers = factorOptions, ReturnUrl = returnUrl, RememberMe = rememberMe });
        //}

        ////
        //// POST: /Account/SendCode
        //[HttpPost]
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public async Task<ActionResult> SendCode(SendCodeViewModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return View();
        //    }

        //    // Generate the token and send it
        //    if (!await SignInManager.SendTwoFactorCodeAsync(model.SelectedProvider))
        //    {
        //        return View("Error");
        //    }
        //    return RedirectToAction("VerifyCode", new { Provider = model.SelectedProvider, ReturnUrl = model.ReturnUrl, RememberMe = model.RememberMe });
        //}

        ////
        //// GET: /Account/ExternalLoginCallback
        //[AllowAnonymous]
        //public async Task<ActionResult> ExternalLoginCallback(string returnUrl)
        //{
        //    var loginInfo = await AuthenticationManager.GetExternalLoginInfoAsync();
        //    if (loginInfo == null)
        //    {
        //        return RedirectToAction("Login");
        //    }

        //    // Sign in the user with this external login provider if the user already has a login
        //    var result = await SignInManager.ExternalSignInAsync(loginInfo, isPersistent: false);
        //    switch (result)
        //    {
        //        case SignInStatus.Success:
        //            return RedirectToLocal(returnUrl);
        //        case SignInStatus.LockedOut:
        //            return View("Lockout");
        //        case SignInStatus.RequiresVerification:
        //            return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = false });
        //        case SignInStatus.Failure:
        //        default:
        //            // If the user does not have an account, then prompt the user to create an account
        //            ViewBag.ReturnUrl = returnUrl;
        //            ViewBag.LoginProvider = loginInfo.Login.LoginProvider;
        //            return View("ExternalLoginConfirmation", new ExternalLoginConfirmationViewModel { Email = loginInfo.Email });
        //    }
        //}

        ////
        //// POST: /Account/ExternalLoginConfirmation
        //[HttpPost]
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public async Task<ActionResult> ExternalLoginConfirmation(ExternalLoginConfirmationViewModel model, string returnUrl)
        //{
        //    if (User.Identity.IsAuthenticated)
        //    {
        //        return RedirectToAction("Index", "Manage");
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        // Get the information about the user from the external login provider
        //        var info = await AuthenticationManager.GetExternalLoginInfoAsync();
        //        if (info == null)
        //        {
        //            return View("ExternalLoginFailure");
        //        }
        //        var user = new User { UserName = model.Email, Email = model.Email };
        //        var result = await UserManager.CreateAsync(user);
        //        if (result.Succeeded)
        //        {
        //            result = await UserManager.AddLoginAsync(user.Id, info.Login);
        //            if (result.Succeeded)
        //            {
        //                await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
        //                return RedirectToLocal(returnUrl);
        //            }
        //        }
        //        AddErrors(result);
        //    }

        //    ViewBag.ReturnUrl = returnUrl;
        //    return View(model);
        //}

        //    //
        //    // GET: /Account/ExternalLoginFailure
        //    [AllowAnonymous]
        //    public ActionResult ExternalLoginFailure()
        //    {
        //        return View();
        //    }

        //    protected override void Dispose(bool disposing)
        //    {
        //        if (disposing)
        //        {
        //            if (_userManager != null)
        //            {
        //                _userManager.Dispose();
        //                _userManager = null;
        //            }

        //            if (_signInManager != null)
        //            {
        //                _signInManager.Dispose();
        //                _signInManager = null;
        //            }
        //        }

        //        base.Dispose(disposing);
        //    }

        //    #region Helpers
        //    // Used for XSRF protection when adding external logins
        //    private const string XsrfKey = "XsrfId";

        //    private IAuthenticationManager AuthenticationManager
        //    {
        //        get
        //        {
        //            return HttpContext.GetOwinContext().Authentication;
        //        }
        //    }

        //    private void AddErrors(IdentityResult result)
        //    {
        //        foreach (var error in result.Errors)
        //        {
        //            ModelState.AddModelError("", error);
        //        }
        //    }

        //    private ActionResult RedirectToLocal(string returnUrl)
        //    {
        //        if (Url.IsLocalUrl(returnUrl))
        //        {
        //            return Redirect(returnUrl);
        //        }
        //        return RedirectToAction("Index", "Home");
        //    }

        //    internal class ChallengeResult : HttpUnauthorizedResult
        //    {
        //        public ChallengeResult(string provider, string redirectUri)
        //            : this(provider, redirectUri, null)
        //        {
        //        }

        //        public ChallengeResult(string provider, string redirectUri, string userId)
        //        {
        //            LoginProvider = provider;
        //            RedirectUri = redirectUri;
        //            UserId = userId;
        //        }

        //        public string LoginProvider { get; set; }
        //        public string RedirectUri { get; set; }
        //        public string UserId { get; set; }

        //        public override void ExecuteResult(ControllerContext context)
        //        {
        //            var properties = new AuthenticationProperties { RedirectUri = RedirectUri };
        //            if (UserId != null)
        //            {
        //                properties.Dictionary[XsrfKey] = UserId;
        //            }
        //            context.HttpContext.GetOwinContext().Authentication.Challenge(properties, LoginProvider);
        //        }
        //    }

        #region Helpers

        private IActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
              //  return InternalS();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Code);
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

        //private class ExternalLoginData
        //{
        //    public string LoginProvider { get; set; }
        //    public string ProviderKey { get; set; }
        //    public string UserName { get; set; }

        //    public IList<Claim> GetClaims()
        //    {
        //        IList<Claim> claims = new List<Claim>();
        //        claims.Add(new Claim(ClaimTypes.NameIdentifier, ProviderKey, null, LoginProvider));

        //        if (UserName != null)
        //        {
        //            claims.Add(new Claim(ClaimTypes.Name, UserName, null, LoginProvider));
        //        }

        //        return claims;
        //    }

        //    public static ExternalLoginData FromIdentity(ClaimsIdentity identity)
        //    {
        //        if (identity == null)
        //        {
        //            return null;
        //        }

        //        Claim providerKeyClaim = identity.FindFirst(ClaimTypes.NameIdentifier);

        //        if (providerKeyClaim == null || String.IsNullOrEmpty(providerKeyClaim.Issuer)
        //            || String.IsNullOrEmpty(providerKeyClaim.Value))
        //        {
        //            return null;
        //        }

        //        if (providerKeyClaim.Issuer == ClaimsIdentity.DefaultIssuer)
        //        {
        //            return null;
        //        }

        //        return new ExternalLoginData
        //        {
        //            LoginProvider = providerKeyClaim.Issuer,
        //            ProviderKey = providerKeyClaim.Value,
        //            UserName = identity.FindFirstValue(ClaimTypes.Name)
        //        };
        //    }
        //}

        //private static class RandomOAuthStateGenerator
        //{
        //    private static RandomNumberGenerator _random = new RNGCryptoServiceProvider();

        //    public static string Generate(int strengthInBits)
        //    {
        //        const int bitsPerByte = 8;

        //        if (strengthInBits % bitsPerByte != 0)
        //        {
        //            throw new ArgumentException("strengthInBits must be evenly divisible by 8.", "strengthInBits");
        //        }

        //        int strengthInBytes = strengthInBits / bitsPerByte;

        //        byte[] data = new byte[strengthInBytes];
        //        _random.GetBytes(data);
        //        return HttpServerUtility.UrlTokenEncode(data);
        //    }
        //}

        #endregion
    }
}