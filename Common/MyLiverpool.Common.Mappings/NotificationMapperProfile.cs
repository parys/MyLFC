﻿using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

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