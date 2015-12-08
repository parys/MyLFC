using System.Threading.Tasks;
using MyLiverpoolSite.Business.ViewModels.Roles;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IRoleService
    {
        Task<RoleRoleGroupVM> GetAllGroups(int page);
    }
}
