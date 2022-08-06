using AutoMapper;
using MyLfc.Application.Features.Account.Commands;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Account;

public class AccountProfile : Profile
{
    public AccountProfile()
    {
        CreateMap<RegisterUserCommand.Request, FullUser>();
    }
}
