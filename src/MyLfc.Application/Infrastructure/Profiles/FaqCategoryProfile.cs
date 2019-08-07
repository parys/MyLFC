using AutoMapper;
using MyLfc.Application.FaqCategories;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class FaqCategoryProfile : Profile
    {
        public FaqCategoryProfile()
        {
            CreateMap<FaqCategory, GetFaqCategoriesListQuery.FaqCategoryListDto>();

            CreateMap<FaqCategory, GetFaqCategoryDetailQuery.Response>();

            CreateMap<CreateFaqCategoryCommand, FaqCategory>();

            CreateMap<UpdateFaqCategoryCommand, FaqCategory>();
        }
    }
}
