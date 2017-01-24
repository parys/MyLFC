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
    public class PersonRepository : IPersonRepository
    {
        private readonly LiverpoolContext _context;

        public PersonRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public Task<Person> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Person> AddAsync(Person entity)
        {
            var result = await _context.Persons.AddAsync(entity);
            return result.Entity;
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Person entity)
        {
            throw new NotImplementedException();
        }

        public void Update(Person entity)
        {
            throw new NotImplementedException();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Person, bool>> filter = null)
        {
            IQueryable<Person> query = _context.Persons;

            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }

        public Task<IEnumerable<Person>> GetListAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Person>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<Person, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Person, object>> orderBy = null)
        {
            IQueryable<Person> query = _context.Persons;

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
