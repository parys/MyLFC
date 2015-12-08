using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Roles;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class RoleService : IRoleService
    {
        private readonly IUnitOfWork _unitOfWork;

        public RoleService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<RoleRoleGroupVM> GetAllGroups(int page)
        {
            var roleGroups = await _unitOfWork.RoleGroupRepository.GetAsync(page);
            var roleGroupsVM = Mapper.Map<IEnumerable<RoleGroupVM>>(roleGroups.ToList());
            var allgroupsCount = await _unitOfWork.RoleGroupRepository.GetCountAsync();
            var allRoles = await _unitOfWork.RoleRepository.GetAsync();
            var model = new RoleRoleGroupVM()
            {
                RoleGroups = new PageableData<RoleGroupVM>(roleGroupsVM, page, allgroupsCount),
                Roles = Mapper.Map<ICollection<RoleVM>>(allRoles)
            };

            return model;
        }
    }
}
