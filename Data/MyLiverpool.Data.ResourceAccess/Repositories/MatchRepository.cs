﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class MatchRepository: IMatchRepository
    {
        private readonly LiverpoolContext _context;

        public MatchRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Match> GetByIdAsync(int id)
        {
            return await _context.Matches
                .Include(m => m.Club)
                .Include(m => m.Stadium)
                .Include(x => x.Events).ThenInclude(x => x.Person)
                .Include(x => x.Comments)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<Match> AddAsync(Match entity)
        {
            var addedEntity = await _context.Matches.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var match = await _context.Matches.FindAsync(id);
            if (match != null)
            {
                await DeleteAsync(match);
            }
        }

        public async Task DeleteAsync(Match entity)
        {
            _context.Matches.Remove(entity);
            await _context.SaveChangesAsync();
        }
        
        public async Task UpdateAsync(Match entity)
        {
            _context.Matches.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        
        public async Task<int> GetCountAsync(Expression<Func<Match, bool>> filter = null)
        {
            IQueryable<Match> query = _context.Matches;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.CountAsync();
        }
        
        public async Task<IEnumerable<Match>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Match, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Match, object>> orderBy = null)
        {
            IQueryable<Match> query = _context.Matches.Include(m => m.Club).Include(m => m.Stadium).Include(x => x.Events);

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

        public async Task<Match> GetLastMatchAsync()
        {
            return await _context.Matches.Include(m => m.Club).Include(m => m.Events)
                .OrderBy(m => m.DateTime)
                .LastOrDefaultAsync(m => m.DateTime <= DateTimeOffset.Now.AddHours(1.5));
               // .LastOrDefaultAsync(m => !string.IsNullOrWhiteSpace(m.Score));
        }

        public async Task<Match> GetNextMatchAsync()
        {
            return await _context.Matches.Include(m => m.Club).Include(m => m.Stadium).Include(m => m.Events)
                .OrderBy(m => m.DateTime)
                .FirstOrDefaultAsync(m => m.DateTime >= DateTimeOffset.Now.AddHours(1.5));
             //   .FirstOrDefaultAsync(m => string.IsNullOrWhiteSpace(m.Score));
        }
    }
}
