using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ForumThemeService : IForumThemeService
    {
        private readonly IForumThemeRepository _forumThemeRepository;
        private readonly IMapper _mapper;

        public ForumThemeService(IForumThemeRepository forumThemeRepository, IMapper mapper)
        {
            _forumThemeRepository = forumThemeRepository;
            _mapper = mapper;
        }

        //public async Task<int> AddComment(string comment, int themeId, int userId)
        //{
        //    var message = new ForumMessage()
        //    {
        //        AdditionTime = DateTime.Now,
        //        LastModifiedTime = DateTime.Now,
        //        AuthorId = userId,
        //        Message = comment,
        //        ThemeId = themeId
        //    };

        //    _unitOfWork.ForumMessageRepository.AddAsync(message);
        //    await _unitOfWork.SaveAsync();

        //    return message.Id;
        //}

        #region Dto

        public async Task<ForumThemeDto> GetAsync(int id, int page)
        {
            var theme = await _forumThemeRepository.GetByIdWithMessagesAsync(id, page);
            var model = _mapper.Map<ForumThemeDto>(theme);
            model.Messages = new PageableData<ForumMessageDto>(_mapper.Map<IEnumerable<ForumMessageDto>>(theme.Messages), page, theme.MessagesCount);
            return model;
        }

        public async Task<ForumThemeDto> GetAsync(int id)
        {
            var theme = await _forumThemeRepository.GetByIdAsync(id);
            var model = _mapper.Map<ForumThemeDto>(theme);
            return model;
        }

        public async Task<ForumThemeDto> CreateAsync(ForumThemeDto dto)
        {
           var model = _mapper.Map<ForumTheme>(dto);

            model.LastMessageAdditionTime = DateTime.Now;
            model.LastAnswerUserId = model.AuthorId;
         //   model.
            model = await _forumThemeRepository.AddAsync(model);

            return _mapper.Map<ForumThemeDto>(model);
        }

        public async Task<ForumThemeDto> UpdateAsync(ForumThemeDto dto)
        {
            var theme = await _forumThemeRepository.GetByIdAsync(dto.Id);
            if (theme == null)
            {
                return null;
            }
            var model = _mapper.Map<ForumTheme>(dto);
            theme.Name = model.Name;
            theme.SubsectionId = model.SubsectionId;
            theme.Description = model.Description;
            await _forumThemeRepository.UpdateAsync(theme);

            return _mapper.Map<ForumThemeDto>(theme);
        }

        #endregion
    }
}
