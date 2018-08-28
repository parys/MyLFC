using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IGenericRepository<T> where T: IEntity
    {
        Task<T> CreateAsync(T entity);

        Task<T> GetByIdAsync(int id, bool noTracking = false, params Expression<Func<T, object>>[] includes);

        Task<T> GetByComplexIdAsync(int id, int id2);

        Task<T> UpdateAsync(T entity);

        Task UpdateRangeAsync(IEnumerable<T> entities);

        Task<bool> DeleteAsync(T entity);

        Task<bool> DeleteAsync(int id);

        Task DeleteRangeAsync(IEnumerable<T> entities);

        Task<int> CountAsync(Expression<Func<T, bool>> filter = null);

        Task<IEnumerable<T>> GetListAsync(Expression<Func<T, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<T, object>> orderBy = null, params Expression<Func<T, object>>[] includes);

        Task<IEnumerable<T>> GetListAsync(bool asNoTracking = true, Expression<Func<T, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<T, object>> orderBy = null, params Expression<Func<T, object>>[] includes);
        
        Task<IEnumerable<T>> GetListAsync(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<T, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<T, object>> orderBy = null, params Expression<Func<T, object>>[] includes);

        Task<T> GetFirstByFilterAsync(Expression<Func<T, bool>> filter);

        Task<T> GetSingleByFilterAsync(Expression<Func<T, bool>> filter);
        
        IQueryable<T> GetQueryableList(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<T, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<T, object>> orderBy = null, params Expression<Func<T, object>>[] includes);
    }
}
