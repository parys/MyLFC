using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAccountService
    {
        Task<bool> ConfirmEmailAsync(int userId, string code);

        Task<bool> IsUserNameUniqueAsync(string userName);

        Task<bool> IsEmailUniqueAsync(string email);

        Task<DateTime> GetLockOutEndDateAsync(string userName);

        Task<IdentityResult> RegisterUserAsync(RegisterUserDto model);

        Task<bool> ResendConfirmEmail(string userName);

        Task<IdentityResult> UpdateLastModifiedAsync(int userId);
    }
}
