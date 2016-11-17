﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services.Services
{
    public class ForumSectionService : IForumSectionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IForumSectionRepository _forumSectionRepository;

        public ForumSectionService(IUnitOfWork unitOfWork, IMapper mapper, IForumSectionRepository forumSectionRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _forumSectionRepository = forumSectionRepository;
        }

        public async Task<ForumSectionDto> CreateAsync(string name)
        {
            var found = await _unitOfWork.ForumSectionRepository.GetAsync(x => x.Name == name);
            if (found.Count > 0)
            {
                return null;
            }
            var model = new ForumSection(name);
            model = await _unitOfWork.ForumSectionRepository.AddAsync(model);
            await _unitOfWork.SaveAsync();
            var result = _mapper.Map<ForumSectionDto>(model);
            return result;
        
    }

        public async Task<bool> DeleteAsync(int id)
        {
            var section = await _unitOfWork.ForumSectionRepository.GetByIdAsync(id);
            if (section.Subsections.Count > 0)
            {
                return false;
            }
            await _unitOfWork.ForumSectionRepository.DeleteAsync(section);
            await _unitOfWork.SaveAsync();
            return true;
        }

        //public async Task<ForumDto> GetAsync()
        //{
        //    var sections = await _forumSectionRepository.GetListAsync();

        //    var model = new ForumDto()
        //    {
        //        Sections = _mapper.Map<ICollection<ForumSectionDto>>(sections)
        //    };
        //    return model;
        //}

        public async Task<ForumSectionDto> GetAsync(int id)
        {
            var section = await _unitOfWork.ForumSectionRepository.GetByIdAsync(id);
            return _mapper.Map<ForumSectionDto>(section);
        }

        public async Task<IEnumerable<ForumSectionDto>> GetListAsync()
        {
            var sections = await _forumSectionRepository.GetListAsync();
            return _mapper.Map<IEnumerable<ForumSectionDto>>(sections);
        }
    }
}
