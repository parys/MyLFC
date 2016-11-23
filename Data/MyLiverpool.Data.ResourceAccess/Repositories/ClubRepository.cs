using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ClubRepository : IClubRepository
    {
        private readonly LiverpoolContext _context;

        public ClubRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<Club> GetByIdAsync(int id)
        {
            return await _context.Clubs.FindAsync(id);
        }

        public async Task<Club> AddAsync(Club entity)
        {
            var addedEntity = await _context.Clubs.AddAsync(entity);
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var pm = await _context.Clubs.FindAsync(id);
            if (pm != null)
            {
                await DeleteAsync(pm);
            }
        }

        public async Task DeleteAsync(Club entity){

            await Task.FromResult(_context.Clubs.Remove(entity));
        }

        public void Update(Club entity)
        {
            _context.Clubs.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<Club, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = club => true;
            }
            return await _context.Clubs.CountAsync(filter);
        }

        public async Task<Club> GetByEnglishName(string name)
        {
            return await _context.Clubs.FirstOrDefaultAsync(x => x.EnglishName == name);
        }

        public async Task<IEnumerable<Club>> GetListAsync(int page, int itemPerPage = 15, Expression<Func<Club, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Club, object>> orderBy = null)
        {
            IQueryable<Club> query = _context.Clubs;

            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            query = query.Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }
    }
}
