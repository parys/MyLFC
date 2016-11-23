using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services.Services
{
    public class RoleService : IRoleService
    {
        private readonly IRoleGroupRepository _roleGroupRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RoleService(IRoleGroupRepository roleGroupRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _roleGroupRepository = roleGroupRepository;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<bool> EditRoleGroupAsync(int newRoleGroupId, int userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var oldRoleGroup = await _roleGroupRepository.GetByIdAsync(user.RoleGroupId);
            var newRoleGroup = await _roleGroupRepository.GetByIdAsync(newRoleGroupId);

            var rolesToDelete = GetRolesToDelete(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));

            user.RoleGroupId = newRoleGroupId;
            await _unitOfWork.UserManager.RemoveFromRolesAsync(user, rolesToDelete.Select(x => x.Name).ToArray());
            await _unitOfWork.UserManager.AddToRolesAsync(user, rolesToAdd.Select(x => x.Name).ToArray());
            
            await _unitOfWork.UserManager.UpdateAsync(user);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<IEnumerable<RoleGroupDto>> GetRoleGroupsDtoAsync()
        {
            var roleGroups = await _roleGroupRepository.GetListAsync();
            return _mapper.Map<IEnumerable<RoleGroupDto>>(roleGroups);
        }

        public async Task<string> GetUserRolesAsync(int id)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(id.ToString());
            var roles = await _unitOfWork.UserManager.GetRolesAsync(user);
            return string.Join(", ", roles);
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
