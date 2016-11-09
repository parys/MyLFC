using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using Microsoft.EntityFrameworkCore;

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
                            Description = x.Description,
                            ItemsCount = x.Materials.Count,
                            Name = x.Name,
                            MaterialType = x.MaterialType
                        }).FirstOrDefaultAsync();
        }

        public void Add(MaterialCategory entity)
        {
            _context.MaterialCategories.Add(entity);
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

        public Task DeleteAsync(MaterialCategory entity)
        {
            _context.MaterialCategories.Remove(entity);
            return Task.CompletedTask;
        }

        public void Update(MaterialCategory entity)
        {
            _context.MaterialCategories.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public Task<int> GetCountAsync(Expression<Func<MaterialCategory, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public async Task<ICollection<MaterialCategory>> GetAsync(Expression<Func<MaterialCategory, bool>> filter = null,
            params Expression<Func<MaterialCategory, object>>[] includeProperties)
        {
            return await _context.MaterialCategories.Include(x => x.Materials).Where(filter).Select(x => new MaterialCategory()
            {
                Id = x.Id,
                Description = x.Description,
                ItemsCount = x.Materials.Count,
                Name = x.Name,
                MaterialType = x.MaterialType
            }).ToListAsync();
        }
    }
}
