using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class MatchEventRepository: IMatchEventRepository
    {
        private readonly LiverpoolContext _context;

        public MatchEventRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<MatchEvent> GetByIdAsync(int id)
        {
            return await _context.MatchEvents.Include(x => x.Season).Include(x => x.Person)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<MatchEvent> AddAsync(MatchEvent entity)
        {
            var addedEntity = await _context.MatchEvents.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var match = await _context.MatchEvents.FindAsync(id);
            if (match != null)
            {
                await DeleteAsync(match);
            }
        }

        public async Task DeleteAsync(MatchEvent entity)
        {
            _context.MatchEvents.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(MatchEvent entity)
        {
            _context.MatchEvents.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<MatchEvent, bool>> filter = null)
        {
            IQueryable<MatchEvent> query = _context.MatchEvents;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }

        public async Task<IEnumerable<MatchEvent>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<MatchEvent, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<MatchEvent, object>> orderBy = null)
        {
            IQueryable<MatchEvent> query = _context.MatchEvents.Include(m => m.Person).Include(m => m.Season);

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

        public async Task<IEnumerable<MatchEvent>> GetListAsync(Expression<Func<MatchEvent, bool>> filter = null, SortOrder order = SortOrder.Ascending, Expression<Func<MatchEvent, object>> orderBy = null)
        {
            IQueryable<MatchEvent> query = _context.MatchEvents.Include(m => m.Person).Include(m => m.Season);

            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            return await query.ToListAsync();
        }
    }
}
