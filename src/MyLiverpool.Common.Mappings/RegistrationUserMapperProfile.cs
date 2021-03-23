using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Common.Mappings
{
    public class RegistrationUserMapperProfile : Profile
    {
        public RegistrationUserMapperProfile()
        {
            RegisterUserMapping();
        }
        
        private void RegisterUserMapping()
        {
            CreateMap<RegisterUserDto, User>()
                .ForMember(dest => dest.Birthday, src => src.MapFrom(x => x.Birthday))
                .ForMember(dest => dest.Email, src => src.MapFrom(x => x.Email))
                .ForMember(dest => dest.FullName, src => src.MapFrom(x => x.FullName))
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.UserName))
                .ForMember(dest => dest.Gender, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.Ip, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.LastModified, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.Photo, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.RegistrationDate, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.RoleGroupId, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.RoleGroup, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.TwoFactorEnabled, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.AccessFailedCount, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.EmailConfirmed, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.LockoutEnabled, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.LockoutEnd, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.PhoneNumber, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.PhoneNumberConfirmed, src => src.Ignore()) //MapFrom(x => x.))
                .ForMember(dest => dest.SecurityStamp, src => src.Ignore()); //MapFrom(x => x.))
        }
    }
}
