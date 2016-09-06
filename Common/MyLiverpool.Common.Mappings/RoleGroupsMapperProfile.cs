using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.MapperConfigs
{
    public class RoleGroupsMapperProfile : Profile
    {
        public RoleGroupsMapperProfile()
        {
            RegisterRoleGroupsMapping();
        }
        
        private void RegisterRoleGroupsMapping()
        {
            CreateMap<RoleGroup, RoleGroupDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.RussianName));
        }
    }
}
