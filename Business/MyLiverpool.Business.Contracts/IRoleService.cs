using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Business.Contracts
{
    public interface IRoleService
    {
        Task<bool> EditRoleGroupAsync(int newRoleGroupId, int userId);

        Task<IEnumerable<RoleGroupDto>> GetRoleGroupsDtoAsync();
    }
}
