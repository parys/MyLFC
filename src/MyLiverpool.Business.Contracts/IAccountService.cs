using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IAccountService
    {
        Task<bool> ChangePasswordAsync(int userId, ChangePasswordDto dto);

        Task<bool> ConfirmEmailAsync(int userId, string code);

        Task<bool> ForgotPasswordAsync(string email);

        Task<bool> IsUserNameUniqueAsync(string userName);

        Task<bool> IsEmailUniqueAsync(string email);
        
        Task<IdentityResult> RegisterUserAsync(RegisterUserDto model);

        Task<bool> ResendConfirmEmail(string email);

        Task<IdentityResult> ResetPasswordAsync(ResetPasswordDto dto);

        Task<bool> UpdateLastModifiedAsync(int userId);
    }
}
