using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class ChatMessageRepository : IChatMessageRepository
    {
        private readonly LiverpoolContext _context;

        public ChatMessageRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<ChatMessage> GetByIdAsync(int id)
        {
            return await _context.ChatMessages.Include(x => x.Author).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ChatMessage> AddAsync(ChatMessage entity)
        {
            var addedEntity = await _context.ChatMessages.AddAsync(entity); //maybe I can in future returns with nav props
            return addedEntity.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.ChatMessages.FindAsync(id);
            if (entity == null)
            {
                return;
            }
            await DeleteAsync(entity);
        }

        public async Task DeleteAsync(ChatMessage entity)
        {
            _context.ChatMessages.Remove(entity);
            await SaveChangesAsync();
        }

        public void Update(ChatMessage entity)
        {
            _context.ChatMessages.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<ChatMessage, bool>> filter = null)
        {
            IQueryable<ChatMessage> query = _context.ChatMessages;
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }

        public async Task<IEnumerable<ChatMessage>> GetListAsync(int lastMessageId)
        {
            return
                await _context.ChatMessages.Include(x => x.Author)
                    .Where(x => x.Id > lastMessageId)
                    .OrderByDescending(x => x.AdditionTime)
                    .Take(GlobalConstants.TakingChatMessagesCount)
                    .ToListAsync();
        }
    }
}
