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
    public class TransferRepository : ITransferRepository
    {
        private readonly LiverpoolContext _context;

        public TransferRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Transfer> GetByIdAsync(int id)
        {
            return await _context.Transfers.Include(x => x.Person).Include(x => x.Club)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Transfer> AddAsync(Transfer entity)
        {
            var addedEntity = await _context.Transfers.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Transfers.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(Transfer entity)
        {
            _context.Transfers.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public void Update(Transfer entity)
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Transfer entity)
        {
            _context.Transfers.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Transfer>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<Transfer, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Transfer, object>> orderBy = null)
        {
            IQueryable<Transfer> query = _context.Transfers.Include(m => m.Club).Include(m => m.Person);

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

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Transfer, bool>> filter = null)
        {
            IQueryable<Transfer> query = _context.Transfers;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }
    }
}
