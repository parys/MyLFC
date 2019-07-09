using AutoMapper;
using MyLfc.Application.HelpEntities;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class HelpEntityProfile : Profile
    {
        public HelpEntityProfile()
        {
            CreateMap<CreateOrUpdateEntityCommand.Request, HelpEntity>();
        }
    }
}
