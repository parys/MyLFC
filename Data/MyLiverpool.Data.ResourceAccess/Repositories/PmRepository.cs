using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class PmRepository : IPmRepository
    {
        private readonly LiverpoolContext _context;

        public PmRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<PrivateMessage> GetByIdAsync(int id)
        {//bug
            return await _context.PrivateMessages.Include(x => x.Receiver).Include(x => x.Sender).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<PrivateMessage> AddAsync(PrivateMessage entity)
        {
            var addedEntity = await _context.PrivateMessages.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.PrivateMessages.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(PrivateMessage entity)
        {
            await Task.FromResult(_context.PrivateMessages.Remove(entity));
        }

        public void Update(PrivateMessage entity)
        {
            _context.PrivateMessages.Update(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<PrivateMessage, bool>> filter = null)
        {
            IQueryable<PrivateMessage> query = _context.PrivateMessages;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }

        public Task<IEnumerable<PrivateMessage>> GetListAsync()
        {
            throw new NotImplementedException("Not need to implement");
        }

        public async Task<IEnumerable<PrivateMessage>> GetAsync(Expression<Func<PrivateMessage, bool>> filter = null)
        {//should be better test
            return await _context.PrivateMessages.Include(x => x.Receiver).Include(x=> x.Sender).Where(filter).ToListAsync();
        }
    }
}
