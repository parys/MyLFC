using MyLiverpoolSite.Business.ViewModels.Users;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUserService
    {
        CreateUserViewModel GetCreateViewModel();

        bool IsModelValid(CreateUserViewModel model);

        void Create(CreateUserViewModel model);
    }
}
