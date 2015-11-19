using System.Threading.Tasks;
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
    }
}
