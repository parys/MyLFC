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
    public class RoleGroupRepository : IRoleGroupRepository
    {
        private readonly LiverpoolContext _context;

        public RoleGroupRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<RoleGroup> GetByIdAsync(int id)
        {
            return await _context.RoleGroups.Include(x => x.RoleGroups)
                .ThenInclude(x => x.Role)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<RoleGroup> AddAsync(RoleGroup entity)
        {
            var addedEntity = await _context.RoleGroups.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.RoleGroups.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(RoleGroup entity)
        {
            await Task.FromResult(_context.RoleGroups.Remove(entity));
        }
        
        public async Task UpdateAsync(RoleGroup entity)
        {
            _context.RoleGroups.Update(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<RoleGroup, bool>> filter = null)
        {
            IQueryable<RoleGroup> query = _context.RoleGroups;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }

        public async Task<IEnumerable<RoleGroup>> GetListWithRolesAsync()
        {
            return await _context.RoleGroups.Include(x => x.RoleGroups).ThenInclude(x => x.Role).ToListAsync();
        }

        public async Task<IEnumerable<RoleGroup>> GetListAsync()
        {
            return await _context.RoleGroups.ToListAsync();
        }
    }
}
