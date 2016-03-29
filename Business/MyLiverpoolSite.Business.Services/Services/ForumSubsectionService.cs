using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class ForumSubsectionService : IForumSubsectionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ForumSubsectionService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public Task<bool> CreateAsync(ForumSubsectionDto dto)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ForumSubsectionDto> GetAsync(int subsectionId, int page)
        {
            var subsection = await _unitOfWork.ForumSubsectionRepository.GetByIdAsync(subsectionId);
            var subsectionThemes =
                await _unitOfWork.ForumThemeRepository.GetAsync(page, filter: x => x.SubsectionId == subsectionId);
            var subsectionThemesCount = await _unitOfWork.ForumThemeRepository.GetCountAsync(x => x.SubsectionId == subsectionId);
            if (subsection == null)
            {
                return null;
            }
            var model = _mapper.Map<ForumSubsectionDto>(subsection);
            model.Themes = new PageableData<ForumThemeMiniDto>(_mapper.Map<IEnumerable<ForumThemeMiniDto>>(subsectionThemes), page, subsectionThemesCount);
            return model;
        }
    }
}
