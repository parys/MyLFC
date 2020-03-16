using AutoMapper;
using MyLfc.Application.Contracts;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class ContractProfile : Profile
    {
        public ContractProfile()
        {
            CreateMap<CreateContractCommand.Request, Contract>();

            CreateMap<UpdateContractCommand.Request, Contract>();

            CreateMap<Contract, GetContractDetailQuery.Response>()
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"));

            CreateMap<Contract, GetContractListQuery.ContractListDto>()
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"));
        }
    }
}
