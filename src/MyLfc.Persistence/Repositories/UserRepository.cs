using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly LiverpoolContext _context;
        private readonly UserManager<User> _userManager;

        public UserRepository(LiverpoolContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<User> GetByIdForUpdateAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User> GetByIdAsync(int id)
        {
            var user = await _context.Users.Where(x => x.Id == id).Select(x => new User
            {
                Id = x.Id,
                OldId = x.OldId,
                Birthday = x.Birthday,
                BlogsCount = x.BlogsCount,
                NewsCount = x.NewsCount,
                CommentsCount = x.CommentsCount,
                ConcurrencyStamp = x.ConcurrencyStamp,
                Email = x.Email,
                EmailConfirmed = x.EmailConfirmed,
                FullName = x.FullName,
                Gender = x.Gender,
                Ip = x.Ip,
                LastModified = x.LastModified,
                LockoutEnd = x.LockoutEnd,
                LockoutEnabled = x.LockoutEnabled,
                Photo = x.Photo,
                RegistrationDate = x.RegistrationDate,
                RoleGroupId = x.RoleGroupId,
                RoleGroup = x.RoleGroup,
                UserName = x.UserName,
                AccessFailedCount = x.AccessFailedCount,
                PasswordHash = x.PasswordHash,
                SecurityStamp = x.SecurityStamp,
                NormalizedEmail = x.NormalizedEmail,
                NormalizedUserName = x.NormalizedUserName
            }).FirstOrDefaultAsync();
            return user;
        }
        
        public async Task UpdateAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
        
        public async Task<DateTimeOffset?> GetLockoutEndDateAsync(int userId)
        {
            return await _userManager.GetLockoutEndDateAsync(new User(userId));
        }
        
        public async Task<User> FindByNameAsync(string username)
        {
            return await _userManager.FindByNameAsync(username);
        }

        public async Task<User> FindByEmailAsync(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        public async Task<bool> CheckPasswordAsync(User user, string password)
        {
            return await _userManager.CheckPasswordAsync(user, password);
        }

        public async Task<IdentityResult> ChangePasswordAsync(int userId, string oldPassword, string newPassword)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                throw new NullReferenceException("User cannot be null");
            }
            return await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);
        }

        public async Task<IdentityResult> ConfirmEmailAsync(int userId, string code)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return IdentityResult.Failed(new IdentityError() { Description = "User is null"});
            }
            return await _userManager.ConfirmEmailAsync(user, code);
        }

        public async Task<IdentityResult> ResetPasswordAsync(User user, string token, string password)
        {
            return await _userManager.ResetPasswordAsync(user, token, password);
        }

        public async Task<string> GenerateEmailConfirmationTokenAsync(int userId)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                throw new NullReferenceException("User cannot be null");
            }
            return await _userManager.GenerateEmailConfirmationTokenAsync(user);
        }

        public async Task<string> GeneratePasswordResetTokenAsync(int userId)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                throw new NullReferenceException("User cannot be null");
            }
            return await _userManager.GeneratePasswordResetTokenAsync(user);
        }

        public async Task<IdentityResult> CreateAsync(User user, string password)
        {
            return await _userManager.CreateAsync(user, password);
        }

        public async Task<User> AddAsync(User entity)
        {
            var result =  await _userManager.CreateAsync(entity); //for migrator
            return result.Succeeded ? entity : null;
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(User entity)
        {
            throw new NotImplementedException();
        }

        public async Task<int> GetCountAsync(Expression<Func<User, bool>> filter = null)
        {
            IQueryable<User> query = _context.Users;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }
    }
}
