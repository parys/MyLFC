﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ForumSectionService : IForumSectionService
    {
        private readonly IMapper _mapper;
        private readonly IForumSectionRepository _forumSectionRepository;

        public ForumSectionService(IMapper mapper, IForumSectionRepository forumSectionRepository)
        {
            _mapper = mapper;
            _forumSectionRepository = forumSectionRepository;
        }

        public async Task<ForumSectionDto> CreateAsync(string name)
        {
            var foundCount = await _forumSectionRepository.GetCountAsync(x => x.Name == name);
            if (foundCount > 0)
            {
                return null;
            }
            var model = new ForumSection(name);
            model = await _forumSectionRepository.AddAsync(model);
            var result = _mapper.Map<ForumSectionDto>(model);
            return result;
        
    }

        public async Task<bool> DeleteAsync(int id)
        {
            var section = await _forumSectionRepository.GetByIdAsync(id);
            if (section.Subsections.Count > 0)
            {
                return false;
            }
            await _forumSectionRepository.DeleteAsync(section);
            return true;
        }

        public async Task<ForumSectionDto> GetAsync(int id)
        {
            var section = await _forumSectionRepository.GetByIdAsync(id);
            return _mapper.Map<ForumSectionDto>(section);
        }

        public async Task<IEnumerable<ForumSectionDto>> GetListAsync(bool isAdmin)
        {
            var sections = await _forumSectionRepository.GetListAsync(isAdmin);
            return _mapper.Map<IEnumerable<ForumSectionDto>>(sections);
        }
    }
}
