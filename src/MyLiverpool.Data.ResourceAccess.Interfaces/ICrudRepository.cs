﻿using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface ICrudRepository<TEntity>
    {
        /// <summary>
        /// Returns element by id
        /// </summary>
        Task<TEntity> GetByIdAsync(int id);

        /// <summary>
        /// Adds object to repository.
        /// </summary>
        Task<TEntity> AddAsync(TEntity entity);

        /// <summary>
        /// Deletes object from repository by id.
        /// </summary>
        Task DeleteAsync(int id);

        /// <summary>
        /// Deletes object from repository by entity.
        /// </summary>
        Task DeleteAsync(TEntity entity);

        /// <summary>
        /// Updates object in repository.
        /// </summary>
        Task UpdateAsync(TEntity entity);

        Task<int> GetCountAsync(Expression<Func<TEntity, bool>> filter = null); //todo should be moved away
    }
}