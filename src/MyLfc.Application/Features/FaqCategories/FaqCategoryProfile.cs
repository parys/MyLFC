using AutoMapper;
using MyLfc.Application.Features.FaqCategories.Commands;
using MyLfc.Application.Features.FaqCategories.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.FaqCategories;

public class FaqCategoryProfile : Profile
{
    public FaqCategoryProfile()
    {
        CreateMap<FaqCategory, GetFaqCategoriesListQuery.FaqCategoryListDto>();

        CreateMap<FaqCategory, GetFaqCategoryDetailQuery.Response>();

        CreateMap<CreateFaqCategoryCommand.Request, FaqCategory>()
            .ForMember(x => x.Name, src => src.MapFrom(x => x.Name.Trim()))
            ;

        CreateMap<UpdateFaqCategoryCommand.Request, FaqCategory>()
            .ForMember(x => x.Name, src => src.MapFrom(x => x.Name.Trim()))
            ;

        CreateMap<FaqCategory, GetFaqQuery.FaqCategoryListDto>();

        CreateMap<FaqItem, GetFaqQuery.FaqItemListDto>();
    }
}
