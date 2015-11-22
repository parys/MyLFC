using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MyLiverpoolSite.Data.DataAccessLayer
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
        /// </summary>
        Task<ICollection<TEntity>> Get(
            Expression<Func<TEntity, bool>> filter = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        Task<ICollection<TEntity>> Get(int page, int itemPerPage = 15, Expression<Func<TEntity, bool>> filter = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        /// <summary>
        /// Returns element by id
        /// </summary>
        Task<TEntity> GetById(object id);

        /// <summary>
        /// Adds object to repository.
        /// </summary>
        void Add(TEntity entity);

        /// <summary>
        /// Deletes object from repository by id.
        /// </summary>
        Task Delete(object id);

        /// <summary>
        /// Deletes object from repository by entity.
        /// </summary>
        Task Delete(TEntity entity);

        /// <summary>
        /// Updates object in repository.
        /// </summary>
        void Update(TEntity entity);

        Task<int> GetCount(Expression<Func<TEntity, bool>> filter = null);
    }
}

