using AutoMapper;
using MyLiverpool.Business.Dto.Polls;
using MyLiverpool.Data.Entities.Polls;

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
            CreateMap<PollAnswer, PollAnswerDto>()
                .ForMember(dst => dst.Value, src => );
            CreateMap<PollAnswerDto, PollAnswer>();
        }
    }
}
