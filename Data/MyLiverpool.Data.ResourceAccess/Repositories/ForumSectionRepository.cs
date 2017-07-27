using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using System.Linq;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumSectionRepository : IForumSectionRepository
    {
        private readonly LiverpoolContext _context;

        public ForumSectionRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<ForumSection> GetByIdAsync(int id)
        {
            return await _context.ForumSections.FindAsync(id);
        }

        public async Task<ForumSection> AddAsync(ForumSection entity)
        {
            var addedEntity = await _context.ForumSections.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var pm = await _context.ForumSections.FindAsync(id);
            if (pm != null)
            {
                await DeleteAsync(pm);
            }
        }

        public async Task DeleteAsync(ForumSection entity)
        {
            _context.ForumSections.Remove(entity);
            await _context.SaveChangesAsync();
        }
        
        public async Task UpdateAsync(ForumSection entity)
        {
            _context.ForumSections.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumSection, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumSections.CountAsync(filter);
        }

        public async Task<IEnumerable<ForumSection>> GetListAsync(bool isAdmin)
        {
            Expression<Func<ForumSubsection, bool>> filter = x => true;
            if (!isAdmin)
            {
                filter = s => s.Name != "MyLiverpool Shop" &&
                              s.Name != "Администрация" &&
                              s.Name != "Новости" && s.Name != "Рабочие темы";
            }
           // return await _context.ForumSections.Include(x => x.Subsections).ToListAsync();
            var result = await _context.ForumSections.Select(x => new ForumSection()
            {
                Id = x.Id,
                Name = x.Name,
                IdOld = x.IdOld,
                Subsections = x.Subsections.Select(y => new ForumSubsection()
                {
                    Id = y.Id,
                    Name = y.Name,
                    ThemesCount = y.Themes.Count,
                    Description = y.Description,
                    IdOld = y.IdOld
                }).ToList()
            }).ToListAsync();
            result.ForEach(x => x.Subsections = x.Subsections.AsQueryable().Where(filter).ToList());
            return result;
        }
    }
}
