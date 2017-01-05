using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ForumMessageService : IForumMessageService
    {
        private readonly IForumMessageRepository _forumMessageRepository;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;

        public ForumMessageService(IForumMessageRepository forumMessageRepository, IMapper mapper, IUserRepository userRepository)
        {
            _forumMessageRepository = forumMessageRepository;
            _mapper = mapper;
            _userRepository = userRepository;
        }

        public async Task<ForumMessageDto> CreateAsync(ForumMessageDto dto)
        {
            var model = _mapper.Map<ForumMessage>(dto);
            model = await _forumMessageRepository.AddAsync(model);
            await _forumMessageRepository.SaveChangesAsync();
            model.Author = await _userRepository.GetByIdAsync(model.AuthorId);
            
            return _mapper.Map<ForumMessageDto>(model);
        }
    }
}
