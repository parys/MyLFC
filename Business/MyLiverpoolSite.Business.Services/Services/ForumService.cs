using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Forum;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class ForumService : IForumService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ForumService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ForumVM> Get()
        {
            var sections = await _unitOfWork.ForumSectionRepository.GetAsync(includeProperties: x => x.Subsections);
            var model = new ForumVM()
            {
                Sections = sections
            };
            return model;
        }

        public async Task<ForumSubsectionVM> GetSubsection(int subsectionId, int page = 1)
        {
            var subsection = await _unitOfWork.ForumSubsectionRepository.GetByIdAsync(subsectionId); //todo modify
            var subsectionThemes =
                await _unitOfWork.ForumThemeRepository.GetAsync(page, filter: x => x.SubsectionId == subsectionId);
            var subsectionThemesCount = await _unitOfWork.ForumThemeRepository.GetCountAsync(x => x.SubsectionId == subsectionId);
            if (subsection == null)
            {
                return new ForumSubsectionVM();
            }
            var model = Mapper.Map<ForumSubsectionVM>(subsection);
            model.Themes = new PageableData<ForumThemeVM>(Mapper.Map<IEnumerable<ForumThemeVM>>(subsectionThemes), page, subsectionThemesCount);
            return model;
        }

        public async Task<ForumThemeVM> GetTheme(int themeId, int page = 1)
        {
            var theme = await _unitOfWork.ForumThemeRepository.GetByIdAsync(themeId);
            var themeMessages = await _unitOfWork.ForumMessageRepository.GetOrderedByIdAsync(page, filter: x => x.ThemeId == themeId);
            var themeMessagesCount = await _unitOfWork.ForumMessageRepository.GetCountAsync(x => x.ThemeId == themeId);
            if (theme == null)
            {
                return new ForumThemeVM();
            }
            var model = Mapper.Map<ForumThemeVM>(theme);
            model.Messages = new PageableData<ForumMessageVM>(Mapper.Map<IEnumerable<ForumMessageVM>>(themeMessages), page, themeMessagesCount);
            return model;
        }

        public async Task<int> AddComment(string comment, int themeId, int userId)
        {
            var message = new ForumMessage()
            {
                AdditionTime = DateTime.Now,
                LastModifiedTime = DateTime.Now,
                AuthorId = userId,
                Message = comment,
                ThemeId = themeId
            };

            _unitOfWork.ForumMessageRepository.Add(message);
            await _unitOfWork.SaveAsync();

            return message.Id;
        }
    }
}
