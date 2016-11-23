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
    public class WishRepository: IWishRepository
    {
        private readonly LiverpoolContext _context;

        public WishRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Wish> GetByIdAsync(int id)
        {
            return await _context.Wishs.FindAsync(id);
        }

        public async Task<Wish> AddAsync(Wish entity)
        {
            var addedEntity = await _context.Wishs.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var wish = await _context.Wishs.FindAsync(id);
            if (wish != null)
            {
                await DeleteAsync(wish);
            }
        }

        public async Task DeleteAsync(Wish entity)
        {
            await Task.FromResult(_context.Wishs.Remove(entity));
        }

        public void Update(Wish entity)
        {
            _context.Wishs.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Wish, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = wish => true;
            }
            return await _context.Wishs.CountAsync(filter);
        }

        public Task<IEnumerable<Wish>> GetListAsync()
        {
            throw new NotImplementedException("Not need to implement");
        }

        public async Task<ICollection<Wish>> GetOrderedByAsync(int page, int itemPerPage = 15, Expression<Func<Wish, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Wish, object>> orderBy = null)
        {
            IQueryable<Wish> query = _context.Wishs;
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
