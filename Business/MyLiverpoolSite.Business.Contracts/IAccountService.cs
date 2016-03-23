using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAccountService
    {
        Task<bool> ChangePassword(int userId, ChangePasswordDto dto);

        Task<bool> ConfirmEmailAsync(int userId, string code);

        Task<bool> ForgotPassword(string email);

        Task<bool> IsUserNameUniqueAsync(string userName);

        Task<bool> IsEmailUniqueAsync(string email);

        Task<DateTime> GetLockOutEndDateAsync(string userName);

        Task<IdentityResult> RegisterUserAsync(RegisterUserDto model);

        Task<bool> ResendConfirmEmail(string email);

        Task<bool> ResetPassword(ResetPasswordDto dto);

        Task<IdentityResult> UpdateLastModifiedAsync(int userId);
    }
}
