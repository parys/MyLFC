using AutoMapper;
using MyLfc.Application.Materials;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class MaterialProfile : Profile
    {
        public MaterialProfile()
        {
            CreateMap<Material, GetLatestMaterialsQuery.MaterialLatestListDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.UserId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.CategoryId, src => src.MapFrom(x => x.CategoryId))
                .ForMember(dest => dest.CategoryName, src => src.MapFrom(x => x.Category.Name))
                .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.Comments.Count))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.PhotoPreview, src => src.MapFrom(x => x.PhotoPreview ?? x.PhotoPath))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.PhotoPreview ?? x.PhotoPath)) //remove when cache will updated
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLowerInvariant()))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads));
        }
    }
}
