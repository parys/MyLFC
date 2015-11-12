using System.Threading.Tasks;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUserService
    {
        CreateUserViewModel GetCreateViewModel();

        bool IsModelValid(CreateUserViewModel model);

        void Create(CreateUserViewModel model);

        Task<PageableData<UserViewModel>> GetAll(int page);

        Task<UserViewModel> GetUserProfile(int id);
    }
}
