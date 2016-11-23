using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumSubsectionRepository : IForumSubsectionRepository
    {
        private readonly LiverpoolContext _context;

        public ForumSubsectionRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<ForumSubsection> GetByIdAsync(int id)
        {
            return await _context.ForumSubsections.FindAsync(id);
        }

        public async Task<ForumSubsection> AddAsync(ForumSubsection entity)
        {
            var addedEntity = await _context.ForumSubsections.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var pm = await _context.ForumSubsections.FindAsync(id);
            if (pm != null)
            {
                await DeleteAsync(pm);
            }
        }

        public async Task DeleteAsync(ForumSubsection entity)
        {
            await Task.FromResult(_context.ForumSubsections.Remove(entity));
        }

        public void Update(ForumSubsection entity)
        {
            _context.ForumSubsections.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumSubsection, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumSubsections.CountAsync(filter);
        }

        public async Task<IEnumerable<ForumSubsection>> GetListAsync()
        {
            return await _context.ForumSubsections.ToListAsync();
        }
    }
}
