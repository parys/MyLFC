using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class MaterialCommentMapperProfile : Profile
    {
        public MaterialCommentMapperProfile()
        {
            RegisterMaterialCommentMapping();
        }
        
        private void RegisterMaterialCommentMapping()
        {
            CreateMap<MaterialComment, MaterialCommentDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Children, src => src.MapFrom(x => x.Children))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.NewsItemId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));

            CreateMap<MaterialCommentEditingDto, MaterialComment>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.NewsItemId))
                .ForMember(dest => dest.ParentId, src => src.MapFrom(x => x.ParentId));
        }
    }
}
