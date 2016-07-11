using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class ForumThemeService : IForumThemeService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ForumThemeService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
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

        //    _unitOfWork.ForumMessageRepository.Add(message);
        //    await _unitOfWork.SaveAsync();

        //    return message.Id;
        //}

        #region Dto

        public async Task<ForumThemeDto> GetAsync(int id, int page)
        {
            var theme = await _unitOfWork.ForumThemeRepository.GetByIdAsync(id);
            var themeMessages = await _unitOfWork.ForumMessageRepository.GetOrderedByIdAsync(page, filter: x => x.ThemeId == id);
            var themeMessagesCount = await _unitOfWork.ForumMessageRepository.GetCountAsync(x => x.ThemeId == id);
            if (theme == null)
            {
                return null;
            }
            var model = _mapper.Map<ForumThemeDto>(theme);
            model.Messages = new PageableData<ForumMessageDto>(_mapper.Map<IEnumerable<ForumMessageDto>>(themeMessages), page, themeMessagesCount);
            return model;
        }

        public async Task<ForumThemeDto> GetAsync(int id)
        {
            var theme = await _unitOfWork.ForumThemeRepository.GetByIdAsync(id);
            var model = _mapper.Map<ForumThemeDto>(theme);
            return model;
        }

        public async Task<ForumThemeDto> CreateAsync(ForumThemeDto dto)
        {
           var model = _mapper.Map<ForumTheme>(dto);

            model.LastMessageAdditionTime = DateTime.Now;
            model.LastAnswerUserId = model.AuthorId;
         //   model.
            _unitOfWork.ForumThemeRepository.Add(model);
            await _unitOfWork.SaveAsync();

            return _mapper.Map<ForumThemeDto>(model);
        }

        public async Task<ForumThemeDto> UpdateAsync(ForumThemeDto dto)
        {
            var theme = await _unitOfWork.ForumThemeRepository.GetByIdAsync(dto.Id);
            if (theme == null)
            {
                return null;
            }
            var model = _mapper.Map<ForumTheme>(dto);
            theme.Name = model.Name;
            theme.SubsectionId = model.SubsectionId;
            theme.Description = model.Description;
            _unitOfWork.ForumThemeRepository.Update(theme);
            await _unitOfWork.SaveAsync();

            return _mapper.Map<ForumThemeDto>(theme);
        }

        #endregion
    }
}
