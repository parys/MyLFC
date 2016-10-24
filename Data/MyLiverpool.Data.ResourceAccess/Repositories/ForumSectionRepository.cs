using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using Microsoft.EntityFrameworkCore;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumSectionRepository : IForumSectionRepository
    {
        private readonly LiverpoolContext _context;

        public ForumSectionRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public Task<ForumSection> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public void Add(ForumSection entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(ForumSection entity)
        {
            throw new NotImplementedException();
        }

        public void Update(ForumSection entity)
        {
            throw new NotImplementedException();
        }

        public Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> GetCountAsync(Expression<Func<ForumSection, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ForumSection>> GetListAsync()
        {
            return await _context.ForumSections.Include(x => x.Subsections).ToListAsync();
        }
    }
}
