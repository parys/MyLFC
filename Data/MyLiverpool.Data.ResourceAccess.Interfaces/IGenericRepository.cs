using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Query;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity: IEntity
    {
        Task<TEntity> CreateAsync(TEntity entity);

        Task<TEntity> GetByIdAsync(int id, bool noTracking = false, params Expression<Func<TEntity, object>>[] includes);
        
        Task<TEntity> GetByPredicateAsync(Expression<Func<TEntity, bool>> predicate,
            bool noTracking = false,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null);

        Task<TEntity> UpdateAsync(TEntity entity);

        Task UpdateRangeAsync(IEnumerable<TEntity> entities);

        Task<bool> DeleteAsync(TEntity entity);

        Task<bool> DeleteAsync(int id);

        Task DeleteRangeAsync(IEnumerable<TEntity> entities);

        Task<int> CountAsync(Expression<Func<TEntity, bool>> filter = null);

        Task<IEnumerable<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<TEntity, object>> orderBy = null, params Expression<Func<TEntity, object>>[] includes);

        Task<IEnumerable<TEntity>> GetListAsync(bool asNoTracking = true, Expression<Func<TEntity, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<TEntity, object>> orderBy = null, params Expression<Func<TEntity, object>>[] includes);
        
        Task<IEnumerable<TEntity>> GetListAsync(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<TEntity, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<TEntity, object>> orderBy = null, params Expression<Func<TEntity, object>>[] includes);

        Task<TEntity> GetFirstByFilterAsync(Expression<Func<TEntity, bool>> filter);

        Task<TEntity> GetSingleByFilterAsync(Expression<Func<TEntity, bool>> filter);
        
        IQueryable<TEntity> GetQueryableList(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<TEntity, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, object>> orderBy = null, params Expression<Func<TEntity, object>>[] includes);

        IQueryable<TEntity> GetQueryableList(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<TEntity, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, object>> orderBy = null,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null);

    }
}
