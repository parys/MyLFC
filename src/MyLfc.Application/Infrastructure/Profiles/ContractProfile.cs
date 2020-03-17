using System;
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
            
            CreateMap<Contract, GetCurrentContractListQuery.CurrentContractListDto>()
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"))
                .ForMember(dst => dst.Age, src => src.MapFrom(x => GetAge(x.Person.Birthday)));

        }

        private static int GetAge(DateTimeOffset? birthday)
        {
            if (birthday.HasValue)
            {
                var years = DateTime.Now.Year - birthday.Value.Year;

                if (birthday.Value.Month > DateTime.Now.Month
                    || birthday.Value.Month == DateTime.Now.Month && birthday.Value.Day > DateTime.Now.Day)
                {
                    years--;
                }

                return years;
            }
            return 0;
        }

    }
}
