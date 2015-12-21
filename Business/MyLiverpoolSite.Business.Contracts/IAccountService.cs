using System;
using System.Threading.Tasks;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAccountService
    {
        Task<int> GetUserIdByLoginAndPassword(string login, string password);

      //  HttpCookie GetCookie(int userId, bool rememberMe);

        Task<bool> IsUserNameUniqueAsync(string userName);

        Task<bool> IsEmailUniqueAsync(string email);

        Task<DateTime> GetLockOutEndDateAsync(string userName);
    }
}
