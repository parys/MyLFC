using AutoMapper;
using MyLfc.Domain.Polls;
using MyLfc.Business.Dto.Polls;

namespace MyLfc.Common.Mappings
{
    public class PollMapperProfile : Profile
    {
        public PollMapperProfile()
        {
            MapPoll();
            MapPollAnswer();
        }

        private void MapPoll()
        {
            CreateMap<Poll, PollDto>();
            CreateMap<PollDto, Poll>();
        }

        private void MapPollAnswer()
        {
            CreateMap<PollAnswer, PollAnswerDto>();
             //   .ForMember(dst => dst.Value, src => );
            CreateMap<PollAnswerDto, PollAnswer>();
        }
    }
}
