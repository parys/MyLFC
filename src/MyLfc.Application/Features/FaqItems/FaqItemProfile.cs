using AutoMapper;
using MyLfc.Application.Features.FaqItems.Commands;
using MyLfc.Application.Features.FaqItems.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.FaqItems;

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
