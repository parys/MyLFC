using System;
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
                .ForMember(dest => dest.Birthday, src => src.MapFrom(x => x.Birthday))
                .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.Comments.Count()))//todo look at generated SQL
                .ForMember(dest => dest.LastModifiedOn, src => src.MapFrom(x => x.LastModified))
                .ForMember(dest => dest.BlogsCount, src => src.MapFrom(x => x.Materials.Where(y => y.Type == MaterialType.Blogs).Count()))
                .ForMember(dest => dest.Email, src => src.MapFrom(x => x.Email))
                .ForMember(dest => dest.EmailConfirmed, src => src.MapFrom(x => x.EmailConfirmed))
                .ForMember(dest => dest.FullName, src => src.MapFrom(x => x.FullName))
                .ForMember(dest => dest.Gender, src => src.MapFrom(x => x.Gender))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.LastModifiedOn, src => src.MapFrom(x => x.LastModified))
                .ForMember(dest => dest.LockoutEnd, src => src.MapFrom(x => x.LockoutEnd.HasValue ? x.LockoutEnd.Value.DateTime : (DateTimeOffset?)null))
                .ForMember(dest => dest.NewsCount, src => src.MapFrom(x => x.Materials.Where(y => y.Type == MaterialType.News).Count()))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Photo))
                .ForMember(dest => dest.RegistrationDate, src => src.MapFrom(x => x.RegistrationDate))
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName))
                .ForMember(dest => dest.RoleGroupId, src => src.MapFrom(x => x.RoleGroupId))
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.UserName));

            CreateMap<User, GetUserListQuery.UserListDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.Comments.Count()))//todo look at generated SQL
                .ForMember(dest => dest.EmailConfirmed, src => src.MapFrom(x => x.EmailConfirmed))
                .ForMember(dest => dest.LastModified, src => src.MapFrom(x => x.LastModified))
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Photo))
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.UserName));
        }
    }
}
