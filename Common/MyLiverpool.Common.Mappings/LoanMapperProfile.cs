using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class LoanMapperProfile : Profile
    {
        public LoanMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<Loan, LoanDto>()
                .ForMember(dest => dest.PersonName, src => src.MapFrom(x => x.Person.RussianName))
                .ForMember(dest => dest.ClubName, src => src.MapFrom(x => x.Club.Name));

            CreateMap<LoanDto, Loan>();
        }
    }
}
