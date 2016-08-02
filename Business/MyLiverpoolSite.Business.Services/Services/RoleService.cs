using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class RoleService : IRoleService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RoleService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<bool> EditRoleGroupAsync(int newRoleGroupId, int userId)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(userId);
            var oldRoleGroup = await _unitOfWork.RoleGroupRepository.GetByIdAsync(user.RoleGroupId);
            var newRoleGroup = await _unitOfWork.RoleGroupRepository.GetByIdAsync(newRoleGroupId);

            var rolesToDelete = GetRolesToDelete(oldRoleGroup.Roles, newRoleGroup.Roles);
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.Roles, newRoleGroup.Roles);

            user.RoleGroupId = newRoleGroupId;
            await _unitOfWork.UserManager.RemoveFromRolesAsync(userId, rolesToDelete.Select(x => x.Name).ToArray());
            await _unitOfWork.UserManager.AddToRolesAsync(userId, rolesToAdd.Select(x => x.Name).ToArray());
            
            _unitOfWork.UserRepository.Update(user);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<IEnumerable<RoleGroupDto>> GetRoleGroupsDtoAsync()
        {
            var roleGroups = await _unitOfWork.RoleGroupRepository.GetAsync();
            return _mapper.Map<IEnumerable<RoleGroupDto>>(roleGroups);
        }

        private IEnumerable<Role> GetRolesToDelete(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return oldRoles.Except(newRoles);
        }

        private IEnumerable<Role> GetRolesToAdd(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return newRoles.Except(oldRoles);
        }
    }
}
