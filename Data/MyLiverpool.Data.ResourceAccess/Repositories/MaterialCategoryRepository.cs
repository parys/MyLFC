using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class MaterialCategoryRepository : IMaterialCategoryRepository
    {
        private readonly LiverpoolContext _context;

        public MaterialCategoryRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<MaterialCategory> GetByIdAsync(int id)
        {
            return await
                    _context.MaterialCategories.Include(x => x.Materials)
                        .Where(x => x.Id == id)
                        .Select(x => new MaterialCategory()
                        {
                            Id = x.Id,
                            OldId = x.OldId,
                            Description = x.Description,
                            ItemsCount = x.Materials.Count,
                            Name = x.Name,
                            MaterialType = x.MaterialType
                        }).FirstOrDefaultAsync();
        }

        public async Task<MaterialCategory> AddAsync(MaterialCategory entity)
        { 
            var addedEntity = await _context.MaterialCategories.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var category =
                await
                    _context.MaterialCategories.Include(x => x.Materials)
                        .FirstOrDefaultAsync(x => x.Id == id && x.Materials.Count > 0);
            if (category != null)
            {
                await DeleteAsync(category);
            }
        }

        public async Task DeleteAsync(MaterialCategory entity)
        {
            _context.MaterialCategories.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(MaterialCategory entity)
        {
            _context.MaterialCategories.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public Task<int> GetCountAsync(Expression<Func<MaterialCategory, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<MaterialCategory>> GetListAsync()
        {
            throw new NotImplementedException("Not need to implement");
        }

        public async Task<ICollection<MaterialCategory>> GetAsync(Expression<Func<MaterialCategory, bool>> filter = null,
            params Expression<Func<MaterialCategory, object>>[] includeProperties)
        {
            IQueryable<MaterialCategory> dbset = _context.MaterialCategories.Include(x => x.Materials);
            if (filter != null)
            {
                dbset = dbset.Where(filter);
            }
            return await dbset.Select(x => new MaterialCategory()
            {
                Id = x.Id,
                Description = x.Description,
                ItemsCount = x.Materials.Count,
                Name = x.Name,
                MaterialType = x.MaterialType,
                OldId = x.OldId
            }).ToListAsync();
        }
    }
}
