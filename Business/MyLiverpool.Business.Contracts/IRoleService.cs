using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Business.Contracts
{
    public interface IRoleService
    {
        Task<bool> EditRoleGroupAsync(int newRoleGroupId, int userId);

        Task<IEnumerable<RoleGroupDto>> GetRoleGroupsWithRolesAsync();

        Task<IEnumerable<RoleGroupDto>> GetRoleGroupsAsync();

        Task<string> GetUserRolesAsync(int id);
    }
}
