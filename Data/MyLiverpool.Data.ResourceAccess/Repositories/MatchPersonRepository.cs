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
    public class MatchPersonRepository : IMatchPersonRepository
    {
        private readonly LiverpoolContext _context;

        public MatchPersonRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<MatchPerson> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<MatchPerson> AddAsync(MatchPerson entity)
        {
            var addedEntity = await _context.MatchPersons.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.MatchPersons.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(MatchPerson entity)
        {
            _context.MatchPersons.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(MatchPerson entity)
        {
            _context.MatchPersons.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<MatchPerson, bool>> filter = null)
        {
            IQueryable<MatchPerson> query = _context.MatchPersons;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }

        public async Task<MatchPerson> GetByComplexIdAsync(int matchId, int personId)
        {
            return await _context.MatchPersons.FindAsync(matchId, personId);
        }

        public async Task<IEnumerable<MatchPerson>> GetListAsync(Expression<Func<MatchPerson, bool>> filter = null, SortOrder order = SortOrder.Ascending, Expression<Func<MatchPerson, object>> orderBy = null)
        {
            IQueryable<MatchPerson> query = _context.MatchPersons.Include(m => m.Person);

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
