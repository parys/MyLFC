﻿using System;
using System.Linq;
using AutoMapper;
using MyLfc.Application.Users;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            //todo look at all props, maybe some not need
            CreateMap<User, GetUserDetailQuery.Response>()
                .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.Comments.Count))//todo look at generated SQL
                .ForMember(dest => dest.LastModifiedOn, src => src.MapFrom(x => x.LastModified))
                .ForMember(dest => dest.BlogsCount, src => src.MapFrom(x => x.Materials.Count(y => y.Type == MaterialType.Blogs)))
                .ForMember(dest => dest.LockoutEnd, src => src.MapFrom(x => x.LockoutEnd.HasValue ? x.LockoutEnd.Value.DateTime : (DateTimeOffset?)null))
                .ForMember(dest => dest.NewsCount, src => src.MapFrom(x => x.Materials.Count(y => y.Type == MaterialType.News)))
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName));

            CreateMap<User, GetUserListQuery.UserListDto>()
                .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.Comments.Count))//todo look at generated SQL
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName));

            CreateMap<User, GetUserBirthdaysQuery.UserBirthdayDto>();

            CreateMap<UpdateUserCommand.Request, User>()
                .ForMember(dest => dest.FullName, src => src.MapFrom(x => x.FullName.Trim()));
                ;

            CreateMap<UserConfig, GetUserConfigQuery.Response>();

            CreateMap<UpdateUserConfigCommand.Request, UserConfig>();
        }
    }
}
