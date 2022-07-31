using AutoMapper;
using MyLfc.Application.FaqItems;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles;

public class FaqItemProfile : Profile
{
    public FaqItemProfile()
    {
        CreateMap<FaqItem, GetFaqItemsListQuery.FaqItemListDto>();

        CreateMap<FaqItem, GetFaqItemDetailQuery.Response>();

        CreateMap<CreateFaqItemCommand.Request, FaqItem>()
            .ForMember(x => x.Answer, src => src.MapFrom(x => x.Answer.Trim()))
            .ForMember(x => x.Question, src => src.MapFrom(x => x.Question.Trim()))
            ;

        CreateMap<UpdateFaqItemCommand.Request, FaqItem>()
            .ForMember(x => x.Answer, src => src.MapFrom(x => x.Answer.Trim()))
            .ForMember(x => x.Question, src => src.MapFrom(x => x.Question.Trim()))
            ;
    }
}
