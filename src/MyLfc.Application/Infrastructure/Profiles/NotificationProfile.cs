using AutoMapper;
using MyLfc.Application.Notifications;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class NotificationProfile : Profile
    {
        public NotificationProfile()
        {
            CreateMap<Notification, GetNotificationListQuery.NotificationListDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()));

            CreateMap<CreateNotificationCommand.Request, Notification>()
                ;
        }
    }
}
