using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAccountService
    {
        Task<int> GetUserIdByLoginAndPassword(string login, string password);

      //  HttpCookie GetCookie(int userId, bool rememberMe);

        Task<bool> IsUserNameUniqueAsync(string userName);

        Task<bool> IsEmailUniqueAsync(string email);

        Task<DateTime> GetLockOutEndDateAsync(string userName);

        Task<IdentityResult> RegisterUserAsync(RegisterUserDto model);
    }
}
