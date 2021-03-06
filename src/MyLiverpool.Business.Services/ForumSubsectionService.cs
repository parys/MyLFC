﻿using System;
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
    public class ForumSubsectionService : IForumSubsectionService
    {
        private readonly IForumSubsectionRepository _forumSubsectionRepository;
        private readonly IMapper _mapper;

        public ForumSubsectionService(IForumSubsectionRepository forumSubsectionRepository, IMapper mapper)
        {
            _forumSubsectionRepository = forumSubsectionRepository;
            _mapper = mapper;
        }

        public async Task<ForumSubsectionDto> CreateAsync(ForumSubsectionDto dto)
        {
            var model = _mapper.Map<ForumSubsection>(dto);
            model = await _forumSubsectionRepository.AddAsync(model);
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
            await _forumSubsectionRepository.UpdateAsync(model);
            dto = _mapper.Map<ForumSubsectionDto>(model);
            return dto;
        } 

        public async Task<ForumSubsectionDto> GetAsync(int subsectionId, int page)
        {
            var subsection = await _forumSubsectionRepository.GetByIdWithThemesAsync(subsectionId, page);

            var model = _mapper.Map<ForumSubsectionDto>(subsection);
       //todo     model.Themes =
        //        new PageableData<ForumThemeMiniDto>(_mapper.Map<IEnumerable<ForumThemeMiniDto>>(subsection.Themes), page,
        //            subsection.ThemesCount);
            return model;
        } 

        public async Task<ForumSubsectionDto> GetAsync(int subsectionId)
        {
            var subsection = await _forumSubsectionRepository.GetByIdAsync(subsectionId);
            return _mapper.Map<ForumSubsectionDto>(subsection);
        }

        public async Task<IEnumerable<ForumSubsectionMiniDto>> GetListAsync()
        {
            var subsections = await _forumSubsectionRepository.GetListAsync();
            var model = _mapper.Map<IEnumerable<ForumSubsectionMiniDto>>(subsections);
            return model;
        }
    }
}
