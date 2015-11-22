using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Forum;
using MyLiverpoolSite.Data.DataAccessLayer;

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
            var sections = await _unitOfWork.ForumSectionRepository.Get(includeProperties: x => x.Subsections);
            var model = new ForumVM()
            {
                Sections = sections
            };
            return model;
        }

        public async Task<ForumSubsectionVM> GetSubsection(int subsectionId, int page = 1)
        {
            var subsection = await _unitOfWork.ForumSubsectionRepository.GetById(subsectionId); //todo modify
            var subsectionThemes =
                await _unitOfWork.ForumThemeRepository.Get(page, filter: x => x.SubsectionId == subsectionId);
            var subsectionThemesCount = await _unitOfWork.ForumThemeRepository.GetCount(x => x.SubsectionId == subsectionId);
            if (subsection == null)
            {
                return new ForumSubsectionVM();
            }
            var model = Mapper.Map<ForumSubsectionVM>(subsection);
            model.Themes = new PageableData<ForumThemeVM>(Mapper.Map<IEnumerable<ForumThemeVM>>(subsectionThemes), page, subsectionThemesCount);
            return model;
        }
    }
}
