using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
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
            await _forumSectionRepository.SaveChangesAsync();
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
            await _forumSectionRepository.SaveChangesAsync();
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
            var section = await _forumSectionRepository.GetByIdAsync(id);
            return _mapper.Map<ForumSectionDto>(section);
        }

        public async Task<IEnumerable<ForumSectionDto>> GetListAsync()
        {
            var sections = await _forumSectionRepository.GetListAsync();
            return _mapper.Map<IEnumerable<ForumSectionDto>>(sections);
        }
    }
}
