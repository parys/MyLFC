using System.Security.Claims;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;
using System.Collections.Generic;

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

        Task<bool> UnbanUser(int userId);

        Task<ClaimsIdentity> GenerateUserIdentityAsync(User user, string authenticationType);


        Task<UserDto> GetUserProfileDtoAsync(int id);

        Task<PrivateMessagesDto> GetPrivateMessagesDtoAsync(int id);

        Task<PageableData<UserMiniDto>> GetUsersDtoAsync(int page, int? roleGroupId);

        Task<PrivateMessageDto> GetPrivateMessageDtoAsync(int messageId, int userId);

        Task<bool> SavePrivateMessageDtoAsync(PrivateMessageDto model);

        Task<bool> EditRoleGroupAsync(int userId, int roleGroupId);

        Task<int> GetUnreadPmCountAsync(int userId);

        Task<IEnumerable<string>> GetUserNamesAsync(string typed);

        Task<string> GetPhotoPathAsync(int userId);

        Task<bool> UpdatePhotoPathAsync(int userId, string photo);
    }
}
