using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
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
            await _chatMessageRepository.AddAsync(model);
            await _chatMessageRepository.SaveChangesAsync();
            model = await _chatMessageRepository.GetByIdAsync(model.Id);
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

        public async Task<ChatMessageDto> GetByIdAsync(int id)
        {
            var model = await _chatMessageRepository.GetByIdAsync(id);
            return _mapper.Map<ChatMessageDto>(model);
        }

        public async Task<IEnumerable<ChatMessageDto>> GetListAsync()
        {
            var messages = await  _chatMessageRepository.GetListAsync();
            var results = _mapper.Map<IEnumerable<ChatMessageDto>>(messages);
            return results;
        }
    }
}
