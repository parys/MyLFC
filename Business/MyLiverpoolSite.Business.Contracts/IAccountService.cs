using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAccountService
    {
        Task<bool> ChangePasswordAsync(int userId, ChangePasswordDto dto);

        Task<bool> ConfirmEmailAsync(int userId, string code);

        Task<bool> ForgotPasswordAsync(string email);

        Task<bool> IsUserNameUniqueAsync(string userName);

        Task<bool> IsEmailUniqueAsync(string email);

        Task<DateTime> GetLockOutEndDateAsync(int userId);

        Task<IdentityResult> RegisterUserAsync(RegisterUserDto model);

        Task<bool> ResendConfirmEmail(string email);

        Task<bool> ResetPasswordAsync(ResetPasswordDto dto);

        Task<IdentityResult> UpdateLastModifiedAsync(int userId);
    }
}
