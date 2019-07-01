using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumSubsectionRepository : IForumSubsectionRepository
    {
        private readonly LiverpoolContext _context;

        public ForumSubsectionRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<ForumSubsection> GetByIdAsync(int id)
        {
            return await _context.ForumSubsections.FindAsync(id);
        }

        public async Task<ForumSubsection> AddAsync(ForumSubsection entity)
        {
            var addedEntity = await _context.ForumSubsections.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var fs = await _context.ForumSubsections.FindAsync(id);
            if (fs != null)
            {
                await DeleteAsync(fs);
            }
        }

        public async Task DeleteAsync(ForumSubsection entity)
        {
            _context.ForumSubsections.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(ForumSubsection entity)
        {
            _context.ForumSubsections.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumSubsection, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumSubsections.CountAsync(filter);
        }

        public async Task<IEnumerable<ForumSubsection>> GetListAsync()
        {
            return await _context.ForumSubsections.ToListAsync();
        }

        public async Task<ForumSubsection> GetByIdWithThemesAsync(int subsectionId, int page, int itemPerPage = 15)
        {
              var subsections = await
                    _context.ForumSubsections.Where(x => x.Id == subsectionId).Select(x =>
                        new ForumSubsection
                        {
                            Name = x.Name,
                            Id = x.Id,
                            Description = x.Description,
                            ThemesCount = x.Themes.Count,
                       //     Themes = x.Themes.Skip((page - 1)*itemPerPage).Take(itemPerPage).ToList(),
                            Section = x.Section,
                            SectionId = x.SectionId,
                            IdOld = x.IdOld,
                            AnswersCount = x.AnswersCount,
                            Views = x.Views
                        }).FirstOrDefaultAsync();
            subsections.Themes = //but reuse
               // _context.ForumThemes.Include(x => x.Author).Skip((page - 1)*itemPerPage).Take(itemPerPage).ToList();
                _context.ForumThemes.Where(x => x.SubsectionId == subsectionId).Skip((page - 1)*itemPerPage).Take(itemPerPage).Select(x => new ForumTheme
                {
                    Id = x.Id,
                    Description = x.Description,
                    IdOld = x.IdOld,
                    Name = x.Name,
                    Answers = x.Messages.Count,
                    AuthorId = x.AuthorId,
                    Author = x.Author,
                    
                }).ToList();
            return subsections;

        }
    }
}
