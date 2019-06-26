using System.Linq;
using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class RoleGroupsMapperProfile : Profile
    {
        public RoleGroupsMapperProfile()
        {
            RegisterRoleGroupsMapping();
            RegisterRolesMapping();
        }
        
        private void RegisterRoleGroupsMapping()
        {
            CreateMap<RoleGroup, RoleGroupDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.RussianName))
                .ForMember(dest => dest.Roles, src => src.MapFrom(x => x.RoleGroups.Select(y => y.Role)));
        }

        private void RegisterRolesMapping()
        {
            CreateMap<Role, RoleDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name));
        }
    }
}
