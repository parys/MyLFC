using System.Threading.Tasks;
using MyLiverpoolSite.Business.ViewModels.Roles;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IRoleService
    {
        Task<RoleRoleGroupVM> GetAllGroupsAsync(int page);

        Task<bool> EditRoleGroupAsync(int newRoleGroupId, int userId);
    }
}
