using AutoMapper;
using MyLfc.Application.Features.Notifications.Commands;
using MyLfc.Application.Features.Notifications.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Notifications;

public class NotificationProfile : Profile
{
    public NotificationProfile()
    {
        CreateMap<Notification, GetNotificationListQuery.NotificationListDto>()
            .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
            .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()));

        CreateMap<CreateNotificationCommand.Request, Notification>()
            ;

        CreateMap<Notification, CreateNotificationCommand.Response>()
            .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()));
    }
}
