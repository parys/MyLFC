using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class MaterialCategoryMapperProfile : Profile
    {
        public MaterialCategoryMapperProfile()
        {
            RegisterMaterialCategoriesMapping();
        }
        
        private void RegisterMaterialCategoriesMapping()
        {
            CreateMap<MaterialCategory, MaterialCategoryDto>()
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.ItemsCount, src => src.MapFrom(x => x.Materials.Count))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id));

            CreateMap<MaterialCategoryDto, MaterialCategory>()
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name));
        }
    }
}
