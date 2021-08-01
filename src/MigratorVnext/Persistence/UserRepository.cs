using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MigratorVnext.Persistence
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
        
        public async Task<User> FindByNameAsync(string username)
        {
            return await _userManager.FindByNameAsync(username);
        }
        
        public async Task<User> AddAsync(User entity)
        {
            var result =  await _userManager.CreateAsync(entity); //for migrator
            return result.Succeeded ? entity : null;
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
