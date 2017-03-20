using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class SeasonRepository : ISeasonRepository
    {
        private readonly LiverpoolContext _context;

        public SeasonRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<Season> GetByIdAsync(int id)
        {
            return await _context.Seasons.FindAsync(id);
        }

        public async Task<Season> AddAsync(Season entity)
        {
            var addedEntity = await _context.Seasons.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteAsync(Season entity)
        {
            throw new NotImplementedException();
        }

        public void Update(Season entity)
        {
            throw new NotImplementedException();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Season, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Season>> GetListAsync()
        {
            throw new NotImplementedException();
        }
    }
}
