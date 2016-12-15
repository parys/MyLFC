using System;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ChatMessageService : IChatMessageService
    {
        private readonly IChatMessageRepository _chatMessageRepository;
        private readonly IMapper _mapper;

        public ChatMessageService(IChatMessageRepository chatMessageRepository, IMapper mapper)
        {
            _chatMessageRepository = chatMessageRepository;
            _mapper = mapper;
        }
        public async Task<ChatMessageDto> CreateAsync(ChatMessageDto dto)
        {
            dto.AdditionTime = DateTime.Now;
            var model = _mapper.Map<ChatMessage>(dto);
            model = await _chatMessageRepository.AddAsync(model);
            return _mapper.Map<ChatMessageDto>(model);
        }

        public Task<ChatMessageDto> UpdateAsync(ChatMessageDto dto)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<ChatMessageDto> GetByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
