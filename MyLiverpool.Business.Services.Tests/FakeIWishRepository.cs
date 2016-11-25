using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services.Tests
{
    public class FakeIWishRepository : IWishRepository
    {
        public Task<Wish> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Wish> AddAsync(Wish entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Wish entity)
        {
            throw new NotImplementedException();
        }

        public void Update(Wish entity)
        {
            throw new NotImplementedException();
        }

        public Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> GetCountAsync(Expression<Func<Wish, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Wish>> GetListAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Wish>> GetOrderedByAsync(int page, int itemPerPage = 15, Expression<Func<Wish, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Wish, object>> orderBy = null)
        {
            throw new NotImplementedException();
        }
    }
}
