using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services.Services
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

        public async Task<ForumSubsectionDto> CreateAsync(ForumSubsectionDto dto)
        {
            var model = _mapper.Map<ForumSubsection>(dto);
            model = await _unitOfWork.ForumSubsectionRepository.AddAsync(model);
            await _unitOfWork.SaveAsync();
            dto = _mapper.Map<ForumSubsectionDto>(model);
            return dto;
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ForumSubsectionDto> UpdateAsync(ForumSubsectionDto dto)
        {
            var model = _mapper.Map<ForumSubsection>(dto);
            _unitOfWork.ForumSubsectionRepository.Update(model);
            await _unitOfWork.SaveAsync();
            dto = _mapper.Map<ForumSubsectionDto>(model);
            return dto;
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

        public async Task<IEnumerable<ForumSubsectionMiniDto>> GetListAsync()
        {
            var subsections = await _unitOfWork.ForumSubsectionRepository.GetAsync();
            var model = _mapper.Map<IEnumerable<ForumSubsectionMiniDto>>(subsections);
            return model;
        }
    }
}
