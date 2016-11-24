using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
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

        public async Task<User> GetByIdAsync(int id)
        {
            var user = await _context.Users.Where(x => x.Id == id).Select(x => new User
            {
                Id = x.Id,
                Birthday = x.Birthday,
                BlogsCount = x.Materials.Count(y => y.Type == MaterialType.Blog),
                NewsCount = x.Materials.Count(y => y.Type == MaterialType.News),
                Email = x.Email,
                EmailConfirmed = x.EmailConfirmed,
                FullName = x.FullName,
                Gender = x.Gender,
                LastModified = x.LastModified,
                LockoutEnd = x.LockoutEnd,
                Photo = x.Photo,
                RegistrationDate = x.RegistrationDate,
                RoleGroupId = x.RoleGroupId,
                RoleGroup = x.RoleGroup,
                UserName = x.UserName
            }).FirstOrDefaultAsync();
            return user;
        }

        public async Task<string> GetUsername(int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user.UserName;
        }

        public async Task<IEnumerable<User>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<User, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<User, object>> orderBy = null)
        {
            IQueryable<User> query = _context.Users;

            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            query = query.Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }

        public async Task<User> UpdateAsync(User user)
        {
            await _userManager.UpdateAsync(user);
            return user;
        }

        public async Task<IdentityResult> SetLockoutEndDateAsync(User user, DateTimeOffset dateTimeOffset)
        {
            return await _userManager.SetLockoutEndDateAsync(user, dateTimeOffset);
        }

        public async Task<DateTimeOffset?> GetLockoutEndDateAsync(int userId)
        {
            return await _userManager.GetLockoutEndDateAsync(new User(userId));
        }

        public async Task<IdentityResult> RemoveFromRolesAsync(User user, IEnumerable<string> roles)
        {
            return await _userManager.RemoveFromRolesAsync(user, roles);
        }

        public async Task<IdentityResult> AddToRoleAsync(User user, string role)
        {
            return await _userManager.AddToRoleAsync(user, role);
        }

        public async Task<IdentityResult> AddToRolesAsync(User user, IEnumerable<string> roles)
        {
            return await _userManager.AddToRolesAsync(user, roles);
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

        public async Task<IList<string>> GetRolesAsync(int id)
        {
            return await _userManager.GetRolesAsync(new User(id));
        }

        public async Task<IdentityResult> ChangePasswordAsync(int userId, string oldPassword, string newPassword)
        {
            return await _userManager.ChangePasswordAsync(new User(userId), oldPassword, newPassword);
        }

        public async Task<IdentityResult> ConfirmEmailAsync(int userId, string code)
        {
            return await _userManager.ConfirmEmailAsync(new User(userId), code);
        }

        public async Task<IdentityResult> ResetPasswordAsync(User user, string token, string password)
        {
            return await _userManager.ResetPasswordAsync(user, token, password);
        }

        public async Task<string> GenerateEmailConfirmationTokenAsync(int userId)
        {
            return await _userManager.GenerateEmailConfirmationTokenAsync(new User(userId));
        }

        public async Task<string> GeneratePasswordResetTokenAsync(int userId)
        {
            return await _userManager.GeneratePasswordResetTokenAsync(new User(userId));
        }

        public async Task<IdentityResult> CreateAsync(User user, string password)
        {
            return await _userManager.CreateAsync(user, password);
        }

        public Task<User> AddAsync(User entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(User entity)
        {
            throw new NotImplementedException();
        }

        public async void Update(User entity)
        {
            await _userManager.UpdateAsync(entity);
        }

        public Task SaveChangesAsync()
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

        public Task<IEnumerable<User>> GetListAsync()
        {
            throw new NotImplementedException("Not need to implement");
        }
    }
}
