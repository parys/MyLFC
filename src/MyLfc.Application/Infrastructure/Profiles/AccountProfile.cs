using AutoMapper;
using MyLfc.Application.Features.Account;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Infrastructure.Profiles;

public class AccountProfile : Profile
{
    public AccountProfile()
    {
        CreateMap<RegisterUserCommand.Request, FullUser>();
    }
}
