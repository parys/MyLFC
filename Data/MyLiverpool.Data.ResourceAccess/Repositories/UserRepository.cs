using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly LiverpoolContext _context;

        public UserRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<UserDto> GetUserAsync(int id)
        {
            IQueryable<User> dbset = _context.Users;
            var user = await dbset.Where(x => x.Id == id).Select(x => new UserDto
            {
                Id = x.Id,
                Birthday = x.Birthday,
                BlogsCount = x.Materials.Count(y => y.Type == MaterialType.Blog),
                NewsCount = x.Materials.Count(y => y.Type == MaterialType.News),
                Email = x.Email,
                EmailConfirmed = x.EmailConfirmed,
                FullName = x.FullName,
                Gender = x.Gender,
                LastModifiedOn = x.LastModified,
                LockoutEndDateUtc = x.LockoutEnd.HasValue ? x.LockoutEnd.Value.DateTime : (DateTime?)null,
                Photo = x.Photo,
                RegistrationDate = x.RegistrationDate,
                RoleGroupId = x.RoleGroupId,
                RoleGroupName = x.RoleGroup.RussianName,
                UserName = x.UserName
            }).FirstOrDefaultAsync();
            return user;
        }

        public Task<User> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public void Add(User entity)
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

        public IEnumerable<UserDto> GetUsersAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
