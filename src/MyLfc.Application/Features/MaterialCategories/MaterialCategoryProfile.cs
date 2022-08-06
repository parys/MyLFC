using System.Linq;
using AutoMapper;
using MyLfc.Application.Features.MaterialCategories.Commands;
using MyLfc.Application.Features.MaterialCategories.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.MaterialCategories;

public class MaterialCategoryProfile : Profile
{
    public MaterialCategoryProfile()
    {
        CreateMap<MaterialCategory, GetMaterialCategoryDetailQuery.Response>();

        CreateMap<MaterialCategory, GetMaterialCategoryListQuery.MaterialCategoryListDto>()
            .ForMember(dest => dest.ItemsCount, src => src.MapFrom(x => x.Materials.Count()));

        CreateMap<CreateMaterialCategoryCommand.Request, MaterialCategory>()
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
            ;

        CreateMap<UpdateMaterialCategoryCommand.Request, MaterialCategory>()
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
            ;
    }
}
