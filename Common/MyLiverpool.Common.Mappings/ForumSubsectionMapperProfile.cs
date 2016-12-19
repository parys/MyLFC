using AutoMapper;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class ForumSubsectionMapperProfile : Profile
    {
        public ForumSubsectionMapperProfile()
        {
            RegisterForumSubsectionMapping();
        }
        
        private void RegisterForumSubsectionMapping()
        {
            CreateMap<ForumSubsection, ForumSubsectionMiniDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
               .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
               .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description));

            CreateMap<ForumSubsection, ForumSubsectionDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Themes, src => src.Ignore());

            CreateMap<ForumSubsectionDto, ForumSubsection>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Themes, src => src.Ignore());
        }
    }
}
