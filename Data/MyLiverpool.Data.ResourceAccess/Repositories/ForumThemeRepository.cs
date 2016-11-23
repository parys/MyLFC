using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumThemeRepository : IForumThemeRepository
    {
        private readonly LiverpoolContext _context;

        public ForumThemeRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<ForumTheme> GetByIdAsync(int id)
        {
            return await _context.ForumThemes.FindAsync(id);
        }

        public async Task<ForumTheme> AddAsync(ForumTheme entity)
        {
            var addedEntity = await _context.ForumThemes.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var ft = await _context.ForumThemes.FindAsync(id);
            if (ft != null)
            {
                await DeleteAsync(ft);
            }
        }

        public async Task DeleteAsync(ForumTheme entity)
        {
            await Task.FromResult(_context.ForumThemes.Remove(entity));
        }

        public void Update(ForumTheme entity)
        {
            _context.ForumThemes.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumTheme, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumThemes.CountAsync(filter);
        }

        public async Task<IEnumerable<ForumTheme>> GetListAsync()
        {
            return await _context.ForumThemes.ToListAsync();
        }
    }
}
