﻿using System;
using AutoMapper;
using MyLfc.Application.Features.Users.Commands;
using MyLfc.Application.Features.Users.Queries;
using MyLfc.Domain;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Users;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<FullUser, GetUserDetailQuery.Response>()
            .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.CommentsCount))
            .ForMember(dest => dest.LastModifiedOn, src => src.MapFrom(x => x.LastModified))
            .ForMember(dest => dest.BlogsCount, src => src.MapFrom(x => x.BlogsCount))
            .ForMember(dest => dest.LockoutEnd, src => src.MapFrom(x => x.LockoutEnd.HasValue ? x.LockoutEnd.Value.DateTime : (DateTimeOffset?)null))
            .ForMember(dest => dest.NewsCount, src => src.MapFrom(x => x.NewsCount))
            .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName));

        CreateMap<FullUser, GetUserListQuery.UserListDto>()
            .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.CommentsCount))
            .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName));

        CreateMap<FullUser, GetUserBirthdaysQuery.UserBirthdayDto>();

        CreateMap<UpdateUserCommand.Request, FullUser>()
            .ForMember(dest => dest.FullName, src => src.MapFrom(x => x.FullName.Trim()));
        ;

        CreateMap<UserConfig, GetUserConfigQuery.Response>();

        CreateMap<UpdateUserConfigCommand.Request, UserConfig>();
    }
}
