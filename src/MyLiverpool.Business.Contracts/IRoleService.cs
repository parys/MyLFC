using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IRoleService
    {
        Task<IEnumerable<RoleGroupDto>> GetRoleGroupsWithRolesAsync();

        Task<IEnumerable<RoleGroupDto>> GetRoleGroupsAsync();

    }
}
