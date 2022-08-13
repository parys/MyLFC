using AutoMapper;
using MyLfc.Application.SignalR.Notifications;
using MyLfc.Domain;

namespace MyLfc.Application.Features.ChatMessages;

public class SignalRNotificationsProfile : Profile
{
    public SignalRNotificationsProfile()
    {
        CreateMap<ChatMessage, SendChatMessageNotification.MessageDto>()
            .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.Author.UserName));
    }
}
