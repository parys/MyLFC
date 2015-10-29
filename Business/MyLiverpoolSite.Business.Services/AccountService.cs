using System;
using System.Linq;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUserService _userService;
        private readonly IUnitOfWork _unitOfWork;

        public AccountService(IUserService userService, IUnitOfWork unitOfWork)
        {
            _userService = userService;
            _unitOfWork = unitOfWork;
        }

        public int GetUserIdByLoginAndPassword(string login, string password)
        {
            var user = _unitOfWork.UserRepository.Get().FirstOrDefault(u => u.Login == login && u.Password == password);
            return user?.Id ?? 0;
        }

        //public HttpCookie GetCookie(int userId, bool rememberMe)
        //{
        //    var authTicket = new FormsAuthenticationTicket(
        //                       1,
        //                       Convert.ToString(userId),
        //                       DateTime.Now,
        //                       DateTime.Now.AddDays(20),
        //                       rememberMe,
        //                       string.Empty,
        //                       "/"
        //                       );
        //    HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName,
        //        FormsAuthentication.Encrypt(authTicket));
        //    if (rememberMe)
        //    {
        //        cookie.Expires = DateTime.Now.AddDays(20);
        //    }
        //    return cookie;
        //}
    }
}
