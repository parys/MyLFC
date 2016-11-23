using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumSectionRepository : IForumSectionRepository
    {
        private readonly LiverpoolContext _context;

        public ForumSectionRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<ForumSection> GetByIdAsync(int id)
        {
            return await _context.ForumSections.FindAsync(id);
        }

        public async Task<ForumSection> AddAsync(ForumSection entity)
        {
            var addedEntity = await _context.ForumSections.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var pm = await _context.ForumSections.FindAsync(id);
            if (pm != null)
            {
                await DeleteAsync(pm);
            }
        }

        public async Task DeleteAsync(ForumSection entity)
        {
            await Task.FromResult(_context.ForumSections.Remove(entity));
        }

        public void Update(ForumSection entity)
        {
            _context.ForumSections.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumSection, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumSections.CountAsync(filter);
        }

        public async Task<IEnumerable<ForumSection>> GetListAsync()
        {
            return await _context.ForumSections.Include(x => x.Subsections).ToListAsync();
        }
    }
}
