using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class ForumSectionService : IForumSectionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ForumSectionService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ForumSectionDto> CreateAsync(string name)
        {
            var found = await _unitOfWork.ForumSectionRepository.GetAsync(x => x.Name == name);
            if (found.Count > 0)
            {
                return null;
            }
            var model = new ForumSection(name);
            _unitOfWork.ForumSectionRepository.Add(model);
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

        public async Task<ForumDto> GetAsync()
        {
            var sections = await _unitOfWork.ForumSectionRepository.GetAsync(includeProperties: x => x.Subsections);

            var model = new ForumDto()
            {
                Sections = _mapper.Map<ICollection<ForumSectionDto>>(sections)
            };
            return model;
        }
    }
}
