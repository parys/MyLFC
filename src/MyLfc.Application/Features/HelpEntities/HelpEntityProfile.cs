using AutoMapper;
using MyLfc.Application.Features.HelpEntities.Commands;
using MyLfc.Domain;

namespace MyLfc.Application.Features.HelpEntities;

public class HelpEntityProfile : Profile
{
    public HelpEntityProfile()
    {
        CreateMap<CreateOrUpdateEntityCommand.Request, HelpEntity>();
    }
}
