using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumMessageRepository : IForumMessageRepository
    {
        private readonly LiverpoolContext _context;

        public ForumMessageRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<ForumMessage> GetByIdAsync(int id)
        {
            return await _context.ForumMessages.FindAsync(id);
        }

        public async Task<ForumMessage> AddAsync(ForumMessage entity)
        {
            var addedEntity = await _context.ForumMessages.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.ForumMessages.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(ForumMessage entity)
        {
            _context.ForumMessages.Remove(entity);
            await _context.SaveChangesAsync();
        }
        
        public async Task UpdateAsync(ForumMessage entity)
        {
            _context.ForumMessages.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumMessage, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumMessages.CountAsync(filter);
        }

        public async Task<IEnumerable<ForumMessage>> GetListAsync()
        {
            return await _context.ForumMessages.ToListAsync();
        }
    }
}
