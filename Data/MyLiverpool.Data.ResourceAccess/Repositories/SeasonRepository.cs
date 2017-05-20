using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
            var entity = await _context.Seasons.FindAsync(id);
            if (entity != null)
            {
                await DeleteAsync(entity);
            }
        }

        public async Task DeleteAsync(Season entity)
        {
            await Task.FromResult(_context.Seasons.Remove(entity));
        }

        public void Update(Season entity)
        {
            _context.Seasons.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Season, bool>> filter = null)
        {
            IQueryable<Season> query = _context.Seasons;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }

        public async Task<IEnumerable<Season>> GetListAsync()
        {
            return await _context.Seasons.OrderBy(s => s.StartSeasonYear).ToListAsync();
        }

        public async Task<Season> GetLatestSeason()
        {
            return await _context.Seasons.OrderBy(s => s.StartSeasonYear).LastOrDefaultAsync();
        }
    }
}
