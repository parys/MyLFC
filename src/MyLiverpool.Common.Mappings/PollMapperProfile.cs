using AutoMapper;
using MyLfc.Domain.Polls;
using MyLiverpool.Business.Dto.Polls;

namespace MyLiverpool.Common.Mappings
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
