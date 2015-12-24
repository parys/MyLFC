using System;
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

        Task<PrivateMessageVM> GetPrivateMessageVMAsync( int receiverId, string answerTitle = null);

        Task<PrivateMessageVM> GetPrivateMessageForReadVMAsync(int messageId, int receiverId);

        Task<int> SavePrivateMessageVMAsync(PrivateMessageVM model, int userId);

        Task<AllPrivateMessagesVM> GetPrivateMessagesForUser(int userId);

        Task<bool> BanUser(int userId, int banDayCount);
    }
}
