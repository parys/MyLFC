using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MyLiverpoolSite.Data.DataAccessLayer.Contracts
{
    /// <summary>
    /// Mediator interface that acts as an abstraction layer between domain and data layer.
    /// Maintains a list of domain model objects of given type.
    /// Provides CRUD (create, read, update, delete) operations on given type of objects.
    /// </summary>
    public interface IGenericRepository<TEntity>
    {
        /// <summary>
        /// Returns all objects of given type.
        /// </summary> todo need refactoring
        Task<ICollection<TEntity>> GetAsync(
            Expression<Func<TEntity, bool>> filter = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        Task<ICollection<TEntity>> GetAsync(int page, int itemPerPage = 15, Expression<Func<TEntity, bool>> filter = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        Task<ICollection<TEntity>> GetOrderedAsync(Expression<Func<TEntity, bool>> filter = null,
            Expression<Func<TEntity, object>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        Task<ICollection<TEntity>> GetOrderedByAsync(int page, int itemPerPage = 15,
            SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, bool>> filter = null, Expression<Func<TEntity, object>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        Task<ICollection<TEntity>> GetOrderedByIdAsync(int page, int itemPerPage = 15,
            Expression<Func<TEntity, bool>> filter = null, params Expression<Func<TEntity, object>>[] includeProperties);

        /// <summary>
        /// Returns element by id
        /// </summary>
        Task<TEntity> GetByIdAsync(object id);

        /// <summary>
        /// Adds object to repository.
        /// </summary>
        void Add(TEntity entity);

        /// <summary>
        /// Deletes object from repository by id.
        /// </summary>
        Task DeleteAsync(object id);

        /// <summary>
        /// Deletes object from repository by entity.
        /// </summary>
        Task DeleteAsync(TEntity entity);

        /// <summary>
        /// Updates object in repository.
        /// </summary>
        void Update(TEntity entity);

        Task<int> GetCountAsync(Expression<Func<TEntity, bool>> filter = null);
    }
}

