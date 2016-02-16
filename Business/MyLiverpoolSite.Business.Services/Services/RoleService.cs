using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Roles;
using MyLiverpoolSite.Data.DataAccessLayer;
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

        public async Task<RoleRoleGroupVM> GetAllGroupsAsync(int page)
        {
            var roleGroups = await _unitOfWork.RoleGroupRepository.GetAsync(page);
            var roleGroupsVM = _mapper.Map<IEnumerable<RoleGroupVM>>(roleGroups.ToList());
            var allgroupsCount = await _unitOfWork.RoleGroupRepository.GetCountAsync();
            var allRoles = await _unitOfWork.RoleRepository.GetAsync();
            var model = new RoleRoleGroupVM()
            {
                RoleGroups = new PageableData<RoleGroupVM>(roleGroupsVM, page, allgroupsCount),
                Roles = _mapper.Map<ICollection<RoleVM>>(allRoles)
            };

            return model;
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
