using AutoMapper;
using MyLfc.Application.Features.Account;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles;

public class AccountProfile : Profile
{
    public AccountProfile()
    {
        CreateMap<RegisterUserCommand.Request, FullUser>();
    }
}
