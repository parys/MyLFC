using AutoMapper;
using MyLfc.Application.FaqItems;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class FaqItemProfile : Profile
    {
        public FaqItemProfile()
        {
            CreateMap<FaqItem, GetFaqItemsListQuery.FaqItemListDto>();

            CreateMap<FaqItem, GetFaqItemDetailQuery.Response>();

            CreateMap<CreateFaqItemCommand.Request, FaqItem>();

            CreateMap<UpdateFaqItemCommand.Request, FaqItem>();
        }
    }
}
