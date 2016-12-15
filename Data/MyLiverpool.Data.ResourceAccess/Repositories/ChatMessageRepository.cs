using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

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
            return await _context.ChatMessages.FindAsync(id);
        }

        public async Task<ChatMessage> AddAsync(ChatMessage entity)
        {
            var addedEntity = await _context.ChatMessages.AddAsync(entity);
            return addedEntity.Entity;
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(ChatMessage entity)
        {
            throw new NotImplementedException();
        }

        public void Update(ChatMessage entity)
        {
            throw new NotImplementedException();
        }

        public Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> GetCountAsync(Expression<Func<ChatMessage, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ChatMessage>> GetListAsync()
        {
            throw new NotImplementedException();
        }
    }
}
