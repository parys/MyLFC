using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ChatMessageService : IChatMessageService
    {
        private readonly IGenericRepository<ChatMessage> _chatMessageRepository;
        private readonly IMapper _mapper;

        public ChatMessageService(IMapper mapper, IGenericRepository<ChatMessage> chatMessageRepository)
        {
            _mapper = mapper;
            _chatMessageRepository = chatMessageRepository;
        }
        public async Task<ChatMessageDto> CreateAsync(ChatMessageDto dto)
        {
            dto.AdditionTime = DateTime.Now;
            var model = _mapper.Map<ChatMessage>(dto);
            await _chatMessageRepository.CreateAsync(model);
            model = await _chatMessageRepository.GetByIdAsync(model.Id, true, x => x.Author);
            return _mapper.Map<ChatMessageDto>(model);
        }

        public Task<ChatMessageDto> UpdateAsync(ChatMessageDto dto)
        {
            throw new NotImplementedException();
        }

        public async Task<ChatMessageDto> UpdateAsync(ChatMessageDto dto, int? userId)
        {
            var entity = await _chatMessageRepository.GetByIdAsync(dto.Id, false, x => x.Author);
            if (userId.HasValue && entity.AuthorId != userId)
            {
                return null;
            }
            entity.Message = dto.Message;
            await _chatMessageRepository.UpdateAsync(entity);
            return _mapper.Map<ChatMessageDto>(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _chatMessageRepository.DeleteAsync(id);
            return true;
        }

        public async Task<ChatMessageDto> GetByIdAsync(int id)
        {
            var model = await _chatMessageRepository.GetByIdAsync(id, true, x => x.Author);
            return _mapper.Map<ChatMessageDto>(model);
        }

        public async Task<IEnumerable<ChatMessageDto>> GetListAsync(int lastMessageId, ChatMessageTypeEnum type)
        {
            Expression<Func<ChatMessage, bool>> filter = x => x.Type == type && x.Id > lastMessageId;
            var messages = await _chatMessageRepository.GetListAsync(1, GlobalConstants.TakingChatMessagesCount, filter,
                SortOrder.Descending, x => x.AdditionTime, x => x.Author);
            return _mapper.Map<IEnumerable<ChatMessageDto>>(messages);
        }
    }
}
