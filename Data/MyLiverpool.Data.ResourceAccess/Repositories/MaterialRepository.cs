using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using Microsoft.EntityFrameworkCore;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class MaterialRepository : IMaterialRepository
    {
        private readonly LiverpoolContext _context;

        public MaterialRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Material>> GetAsync()
        {
            return await _context.Materials.ToListAsync();
        }

        public async Task<Material> GetByIdAsync(int id)
        {
            return await _context.Materials.Include(x => x.Comments).FirstOrDefaultAsync(x => x.Id == id);
        }

        public void Add(Material entity)
        {
            _context.Materials.Add(entity);
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == id);
            _context.Materials.Remove(entity);
        }

        public async Task DeleteAsync(Material entity)
        {
            if (_context.Entry(entity).State == EntityState.Detached)
            {
                _context.Materials.Attach(entity);
            }

            await Task.FromResult(_context.Materials.Remove(entity));
        }

        public void Update(Material entity)
        {
            _context.Materials.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<ICollection<Material>> GetTopMaterials(MaterialType type)
        {
            return await _context.Materials.Where(x => x.OnTop && x.Type == type).ToListAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Material, bool>> filter = null)
        {
            IQueryable<Material> query = _context.Materials;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }

        public async Task<ICollection<Material>> GetOrderedByAsync(int page, int itemPerPage = 15, SortOrder order = SortOrder.Ascending, Expression<Func<Material, bool>> filter = null,
            Expression<Func<Material, object>> orderBy = null, params Expression<Func<Material, object>>[] includeProperties)
        {
            IQueryable<Material> query = _context.Materials;
            if (filter != null)
            {
                query = query.Where(filter); //bug
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
            query = query.Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }
        public async Task<ICollection<Material>> GetOrderedByDescAndNotTopAsync(int page, MaterialType type, int itemPerPage = 15, Expression<Func<Material, bool>> filter = null,
            Expression<Func<Material, object>> orderBy = null, params Expression<Func<Material, object>>[] includeProperties)
        {
            IQueryable<Material> query = _context.Materials;
            query = query.Where(x => !x.OnTop && x.Type == type);

            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, SortOrder.Descending);
            }
            if (includeProperties != null && includeProperties.Any())
            {
                query = includeProperties.Aggregate(query,
                    (current, includeProperty) => current.Include(includeProperty));
            }
            query = query.Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }
    }
}
