using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IGenericRepository<T> where T: IEntity
    {
        Task<T> CreateAsync(T entity);

        Task<T> GetByIdAsync(int id);

        Task<T> GetByComplexIdAsync(int id, int id2);

        Task<T> UpdateAsync(T entity);

        Task<bool> DeleteAsync(T entity);

        Task<bool> DeleteAsync(int id);

        Task<int> GetCountAsync(Expression<Func<T, bool>> filter = null);

        Task<IEnumerable<T>> GetListAsync(int? page = null, int itemPerPage = 15,
            Expression<Func<T, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<T, object>> orderBy = null, params Expression<Func<T, object>>[] includes);
    }
}
