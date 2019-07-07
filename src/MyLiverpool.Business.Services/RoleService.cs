using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class RoleService : IRoleService
    {
        private readonly IGenericRepository<RoleGroup> _roleGroupRepository;
        private readonly IMapper _mapper;

        public RoleService(IGenericRepository<RoleGroup> roleGroupRepository, IMapper mapper)
        {
            _roleGroupRepository = roleGroupRepository;
            _mapper = mapper;
        }
        
        public async Task<IEnumerable<RoleGroupDto>> GetRoleGroupsWithRolesAsync()
        {
            var roleGroups = await _roleGroupRepository
                .GetQueryableList(include: s => s.Include(x => x.RoleGroups).ThenInclude(x => x.Role))
                .ToListAsync();
            return _mapper.Map<IEnumerable<RoleGroupDto>>(roleGroups);
        }

        public async Task<IEnumerable<RoleGroupDto>> GetRoleGroupsAsync()
        {
            var roleGroups = await _roleGroupRepository.GetListAsync();
            return _mapper.Map<IEnumerable<RoleGroupDto>>(roleGroups);
        }
    }
}
