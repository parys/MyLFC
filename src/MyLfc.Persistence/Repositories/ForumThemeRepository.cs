using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ForumThemeRepository : IForumThemeRepository
    {
        private readonly LiverpoolContext _context;

        public ForumThemeRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<ForumTheme> GetByIdAsync(int id)
        {
            return await _context.ForumThemes.FindAsync(id);
        }

        public async Task<ForumTheme> AddAsync(ForumTheme entity)
        {
            var addedEntity = await _context.ForumThemes.AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var ft = await _context.ForumThemes.FindAsync(id);
            if (ft != null)
            {
                await DeleteAsync(ft);
            }
        }

        public async Task DeleteAsync(ForumTheme entity)
        {
            _context.ForumThemes.Remove(entity);
            await _context.SaveChangesAsync();
        }
        
        public async Task UpdateAsync(ForumTheme entity)
        {
            _context.ForumThemes.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ForumTheme, bool>> filter = null)
        {
            if (filter == null)
            {
                filter = section => true;
            }
            return await _context.ForumThemes.CountAsync(filter);
        }

        public async Task<ForumTheme> GetByIdWithMessagesAsync(int id, int page, int itemPerPage = 15)
        {
            var theme = await _context.ForumThemes //todo bug maybe in future it's possible to realize in one request
                .Select(x => new ForumTheme()
            {
                Id = x.Id,
                AuthorId = x.AuthorId,
                Author = x.Author,
                Name = x.Name,
                Description = x.Description,
               // Messages = x.Messages.Skip((page - 1) * itemPerPage).Take(itemPerPage).Select(y => new ForumMessage()
               // {
               //     Id = y.Id,
               //     OldId = y.OldId,
               //     AdditionTime = y.AdditionTime,
               //     AuthorId = y.AuthorId,
               //     Author = y.Author,
               //     Message = y.Message,
               //     IsFirstMessage = y.IsFirstMessage,
               //     LastModifiedTime = y.LastModifiedTime,
               //})
               // .ToList(),
                MessagesCount = x.Messages.Count,
                
            }).FirstOrDefaultAsync(x => x.Id == id); 
            theme.Messages =//bug return to use
                await
                    _context.ForumMessages.Where(x => x.ThemeId == id).Include(x => x.Author)
                        .Where(x => x.ThemeId == id)
                        .Skip((page - 1)*itemPerPage)
                        .Take(itemPerPage)
                        .ToListAsync();

            return theme;
        }
    }
}
