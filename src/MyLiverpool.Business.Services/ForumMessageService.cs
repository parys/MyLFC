using System;
using System.Threading.Tasks;
using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ForumMessageService : IForumMessageService
    {
        private readonly IGenericRepository<ForumMessage> _forumMessageRepository;
        private readonly IMapper _mapper;

        public ForumMessageService(IGenericRepository<ForumMessage> forumMessageRepository, IMapper mapper)
        {
            _forumMessageRepository = forumMessageRepository;
            _mapper = mapper;
        }

        public async Task<ForumMessageDto> CreateAsync(ForumMessageDto dto)
        {
            var model = _mapper.Map<ForumMessage>(dto);
            model = await _forumMessageRepository.CreateAsync(model);
            
            return _mapper.Map<ForumMessageDto>(model);
        }

        public async Task<ForumMessageDto> UpdateAsync(ForumMessageDto dto)
        {
            var model = await _forumMessageRepository.GetFirstByPredicateAsync(x => x.Id == dto.Id);
            model.LastModifiedTime = DateTimeOffset.UtcNow;
            model.Message = dto.Message;
            await _forumMessageRepository.UpdateAsync(model);
            return _mapper.Map<ForumMessageDto>(model);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _forumMessageRepository.DeleteAsync(x => x.Id == id);
            return true;
        }
    }
}
