using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly LiverpoolContext _context;

        public UserRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<User> GetUserAsync(int id)
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
            return await _context.Users.Where(x => x.Id == id).Select(x => x.UserName).FirstOrDefaultAsync();
        }

        public Task<User> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
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

        public void Update(User entity)
        {
            throw new NotImplementedException();
        }

        public Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> GetCountAsync(Expression<Func<User, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> GetListAsync()
        {
            throw new NotImplementedException("Not need to implement");
        }
    }
}
