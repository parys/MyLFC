using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;

namespace MyLiverpool.Data.ResourceAccess
{
    /// <summary>
    /// Generic repository.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity.</typeparam>
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IEntity
    {
        private readonly LiverpoolContext _context;
        private readonly DbSet<TEntity> _dbSet;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="context">Qas context.</param>
        public GenericRepository(LiverpoolContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        /// <summary>
        /// Returns all objects of given type.
        /// </summary>
        /// <param name="filter">Filter for selecting desired data.</param>
        /// <param name="includeProperties">Included properties.</param>
        /// <returns>List with filtered data.</returns>
        public virtual async Task<ICollection<TEntity>> GetAsync(
            Expression<Func<TEntity, bool>> filter = null,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> query = _dbSet;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includeProperties != null && includeProperties.Any())
            {
                query = includeProperties.Aggregate(query,
                    (current, includeProperty) => current.Include(includeProperty));
            }
            return await query.ToListAsync();
        }

        public virtual async Task<ICollection<TEntity>> GetOrderedAsync(
            Expression<Func<TEntity, bool>> filter = null, Expression<Func<TEntity, object>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> query = _dbSet;
            if (filter != null)
            {
                //query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.OrderBy(orderBy);
            }
            if (includeProperties != null && includeProperties.Any())
            {
                query = includeProperties.Aggregate(query,
                    (current, includeProperty) => current.Include(includeProperty));
            }
            return await query.ToListAsync();
        }

        public async Task<ICollection<TEntity>> GetAsync(int page, int itemPerPage = 15, Expression<Func<TEntity, bool>> filter = null, params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> query = _dbSet;
            if (filter != null)
            {
               // query = query.Where(filter);
            }
            if (includeProperties != null && includeProperties.Any())
            {
                query = includeProperties.Aggregate(query,
                    (current, includeProperty) => current.Include(includeProperty));
            }
            query = query.OrderBy(x => x.Id).Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }

        public async Task<ICollection<TEntity>> GetOrderedByAsync(int page, int itemPerPage = 15,
            SortOrder order = SortOrder.Ascending, Expression<Func<TEntity, bool>> filter = null,
            Expression<Func<TEntity, object>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> query = _dbSet;
            if (filter != null)
            {
                //query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            if (includeProperties != null && includeProperties.Any())
            {
                query = includeProperties.Aggregate(query,
                    (current, includeProperty) => current.Include(includeProperty));
            }
            query = query.Skip((page - 1)*itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }

        public async Task<ICollection<TEntity>> GetOrderedByIdAsync(int page, int itemPerPage = 15, Expression<Func<TEntity, bool>> filter = null, params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> query = _dbSet;
            if (filter != null)
            {
               // query = query.Where(filter);
            }
            if (includeProperties != null && includeProperties.Any())
            {
                query = includeProperties.Aggregate(query,
                    (current, includeProperty) => current.Include(includeProperty));
            }
            query = query.OrderBy(x => x.Id).Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }

        /// <summary>
        /// Returns element by id.
        /// </summary>
        /// <param name="id">Entity id.</param>
        /// <returns>Entity.</returns>
        public virtual async Task<TEntity> GetByIdAsync(int id)
        {
            return await _dbSet.SingleAsync(x => x.Id == id);
        }

        /// <summary>
        /// Adds object to repository.
        /// </summary>
        /// <param name="entity">Entity to add.</param>
        public virtual void Add(TEntity entity)
        {
            try
            {
                _dbSet.Add(entity);
            }
            catch (Exception ex)
            {
                var v = ex;
               // ex.InnerException.
                throw;
            }
        }

        /// <summary>
        /// Deletes object from repository by id.
        /// </summary>
        /// <param name="id">Entity id.</param>
        public virtual async Task DeleteAsync(int id)
        {
            await DeleteAsync(await GetByIdAsync(id));
        }

        /// <summary>
        /// Deletes object from repository by entity.
        /// </summary>
        /// <param name="entityToDelete">Entity to delete.</param>
        public virtual async Task DeleteAsync(TEntity entityToDelete)
        {
            if (_context.Entry(entityToDelete).State == EntityState.Detached)
            {
                _dbSet.Attach(entityToDelete);
            }

            await Task.FromResult(_dbSet.Remove(entityToDelete));
        }

        /// <summary>
        /// Updates object in repository.
        /// </summary>
        /// <param name="entityToUpdate">Entity to update.</param>
        public virtual void Update(TEntity entityToUpdate)
        {
            _dbSet.Attach(entityToUpdate);
            _context.Entry(entityToUpdate).State = EntityState.Modified;
        }

        public Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<int> GetCountAsync(Expression<Func<TEntity, bool>> filter = null)
        {
            IQueryable<TEntity> query = _dbSet;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }
    }
}