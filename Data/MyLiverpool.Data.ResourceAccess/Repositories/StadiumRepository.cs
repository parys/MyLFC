using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class StadiumRepository : IStadiumRepository
    {
        private readonly LiverpoolContext _context;

        public StadiumRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Stadium> GetByIdAsync(int id)
        {
            return await _context.Stadiums.FindAsync(id);
        }

        public async Task<Stadium> AddAsync(Stadium entity)
        {
            var addedEntity = await _context.Stadiums.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Stadiums.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(Stadium entity)
        {
            _context.Stadiums.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public void Update(Stadium entity)
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Stadium entity)
        {
            _context.Stadiums.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Stadium>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<Stadium, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Stadium, object>> orderBy = null)
        {
            IQueryable<Stadium> query = _context.Stadiums;

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

        public async Task<IEnumerable<Stadium>> GetListByNameAsync(string typed)
        {
            IQueryable<Stadium> query = _context.Stadiums;
            if (!string.IsNullOrWhiteSpace(typed))
            {
                query = query.Where(s => s.Name.Contains(typed));
            }
            return await query.Take(GlobalConstants.CountStadiumsForAutocomlete).ToListAsync();
        }

        //bug temporary
        public async Task<IEnumerable<Stadium>> GetListAsync()
        {
            return await _context.Stadiums.ToListAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Stadium, bool>> filter = null)
        {
            IQueryable<Stadium> query = _context.Stadiums;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }
    }
}
