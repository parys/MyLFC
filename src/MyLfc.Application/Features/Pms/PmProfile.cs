using AutoMapper;
using MyLfc.Application.Features.Pms.Commands;
using MyLfc.Application.Features.Pms.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Pms;

public class PmProfile : Profile
{
    public PmProfile()
    {
        CreateMap<PrivateMessage, GetPmDetailQuery.Response>()
            .ForMember(dest => dest.Receiver, src => src.MapFrom(x => x.Receiver.UserName))
            .ForMember(dest => dest.Sender, src => src.MapFrom(x => x.Sender.UserName));

        CreateMap<PrivateMessage, GetPmListQuery.PmListDto>()
            .ForMember(dest => dest.Receiver, src => src.MapFrom(x => x.Receiver.UserName))
            .ForMember(dest => dest.Sender, src => src.MapFrom(x => x.Sender.UserName));

        CreateMap<CreatePmCommand.Request, PrivateMessage>()
            .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title.Trim()))
            .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message.Trim()))
            ;
    }
}
