using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Common.Mappings
{
    public class NotificationMapperProfile : Profile
    {
        public NotificationMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<Notification, NotificationDto>()
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLowerInvariant()));

            CreateMap<NotificationDto, Notification>();
        }
    }
}
