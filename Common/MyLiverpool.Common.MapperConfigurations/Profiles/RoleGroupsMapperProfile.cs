using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class RoleGroupsMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public RoleGroupsMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterRoleGroupsMapping();
        }

        private void RegisterRoleGroupsMapping()
        {
            _cfg.CreateMap<RoleGroup, RoleGroupDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.RussianName));
        }
    }
}
