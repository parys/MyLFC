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
    public class LoanRepository : ILoanRepository
    {
        private readonly LiverpoolContext _context;

        public LoanRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Loan> GetByIdAsync(int id)
        {
            return await _context.Loans.Include(x => x.Person).Include(x => x.Club)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Loan> AddAsync(Loan entity)
        {
            var model = await _context.Loans.AddAsync(entity);
            await _context.SaveChangesAsync();
            return model.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Loans.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(Loan entity)
        {
            _context.Loans.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Loan entity)
        {
            _context.Loans.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Loan, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.Loans.CountAsync(filter);
        }

        public async Task<IEnumerable<Loan>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<Loan, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Loan, object>> orderBy = null)
        {
            IQueryable<Loan> query = _context.Loans.Include(m => m.Person).Include(x => x.Club);

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
