using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IEntity
    {
        private readonly LiverpoolContext _context;

        public GenericRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<TEntity> CreateAsync(TEntity entity)
        {
            var entityEntry = await _context.Set<TEntity>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entityEntry.Entity;
        }

        public async Task<TEntity> GetByIdAsync(int id, bool noTracking = false, params Expression<Func<TEntity, object>>[] includes)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (noTracking)
            {
                query = query.AsNoTracking();
            }
            if (includes != null && includes.Any())
            {
                query = includes.Aggregate(query, (current, include) => current.Include(include));
            }
            return await query.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<TEntity> GetByPredicateAsync(Expression<Func<TEntity, bool>> predicate,
            bool noTracking = false,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (noTracking)
            {
                query = query.AsNoTracking();
            }
            if (include != null)
            {
                query = include(query);
            }
            return await query.FirstOrDefaultAsync(predicate);
        }

        public async Task<TEntity> GetByComplexIdAsync(int id, int id2)
        {
            return await _context.Set<TEntity>().FindAsync(id, id2);//todo include props
        }

        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateRangeAsync(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().UpdateRange(entities);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteAsync(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var entity = await _context.Set<TEntity>().FindAsync(id);
            if (entity == null)
            {
                return false;
            }
            return await DeleteAsync(entity);
        }

        public async Task DeleteRangeAsync(IEnumerable<TEntity> entities)
        {
            if (entities.Any())
            {
                _context.Set<TEntity>().RemoveRange(entities);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<int> CountAsync(Expression<Func<TEntity, bool>> filter = null)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>().AsNoTracking();
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }

        public async Task<IEnumerable<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, object>> orderBy = null, params Expression<Func<TEntity, object>>[] includes)
        {
            return await GetListAsync(null, 0, true, filter, order, orderBy, includes);
        }

        public async Task<IEnumerable<TEntity>> GetListAsync(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<TEntity, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, object>> orderBy = null, params Expression<Func<TEntity, object>>[] includes)
        {
            return await GetQueryableList().ToListAsync();
        }

        public async Task<IEnumerable<TEntity>> GetListAsync(bool asNoTracking = true,Expression<Func<TEntity, bool>> filter = null, 
            SortOrder order = SortOrder.Ascending, Expression<Func<TEntity, object>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includes)
        {
            return await GetListAsync(null, 0, asNoTracking, filter, order, orderBy, includes);
        }

        public async Task<TEntity> GetFirstByFilterAsync(Expression<Func<TEntity, bool>> filter)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.FirstOrDefaultAsync();
        }

        public async Task<TEntity> GetSingleByFilterAsync(Expression<Func<TEntity, bool>> filter)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.SingleOrDefaultAsync();
        }
        
        public IQueryable<TEntity> GetQueryableList(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<TEntity, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, object>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includes)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (includes != null && includes.Any())
            {
                query = includes.Aggregate(query, (current, include) => current.Include(include));
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            if (page.HasValue)
            {
                query = query.Skip((page.Value - 1) * itemPerPage).Take(itemPerPage);
            }

            if (asNoTracking)
            {
                query = query.AsNoTracking();
            }
            return query;
        }

        public IQueryable<TEntity> GetQueryableList(int? page = null, int itemPerPage = 15, bool asNoTracking = true,
            Expression<Func<TEntity, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<TEntity, object>> orderBy = null,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (include != null)
            {
                query = include(query);
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            if (page.HasValue)
            {
                query = query.Skip((page.Value - 1) * itemPerPage).Take(itemPerPage);
            }

            if (asNoTracking)
            {
                query = query.AsNoTracking();
            }
            return query;
        }

        /// <summary>
            /// Gets the first or default entity based on a predicate, orderby delegate and include delegate. This method default no-tracking query.
            /// </summary>
            /// <param name="selector">The selector for projection.</param>
            /// <param name="predicate">A function to test each element for a condition.</param>
            /// <param name="orderBy">A function to order elements.</param>
            /// <param name="include">A function to include navigation properties</param>
            /// <param name="disableTracking"><c>True</c> to disable changing tracking; otherwise, <c>false</c>. Default to <c>true</c>.</param>
            /// <remarks>This method default no-tracking query.</remarks>
            public TResult GetFirstOrDefault<TResult>(Expression<Func<TEntity, TResult>> selector,
            Expression<Func<TEntity, bool>> predicate = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
            bool disableTracking = true)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            if (disableTracking)
            {
                query = query.AsNoTracking();
            }

            if (include != null)
            {
                query = include(query);
            }

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            if (orderBy != null)
            {
                return orderBy(query).Select(selector).FirstOrDefault();
            }
            else
            {
                return query.Select(selector).FirstOrDefault();
            }
        }
    }
}
