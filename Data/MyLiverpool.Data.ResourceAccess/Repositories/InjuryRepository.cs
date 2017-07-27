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
    public class InjuryRepository: IInjuryRepository
    {
        private readonly LiverpoolContext _context;

        public InjuryRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Injury> GetByIdAsync(int id)
        {
            return await _context.Injuries.Include(x => x.Person).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Injury> AddAsync(Injury entity)
        {
            var addedEntity = await _context.Injuries.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Injuries.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(Injury entity)
        {
            _context.Injuries.Remove(entity);
            await _context.SaveChangesAsync();
        }
        
        public async Task UpdateAsync(Injury entity)
        {
            _context.Injuries.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Injury, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.Injuries.CountAsync(filter);
        }

        public async Task<IEnumerable<Injury>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<Injury, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Injury, object>> orderBy = null)
        {
            IQueryable<Injury> query = _context.Injuries.Include(m => m.Person);

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
    }
}
