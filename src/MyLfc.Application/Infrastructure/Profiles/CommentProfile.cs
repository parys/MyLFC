using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using MyLfc.Application.Comments;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class CommentProfile : Profile
    {
        public CommentProfile()
        {
            CreateMap<MaterialComment, GetCommentListQuery.CommentListDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()))
                .ForMember(dest => dest.PositiveCount, src => src.MapFrom(x => x.CommentVotes.Count(y => y.Positive)))
                .ForMember(dest => dest.NegativeCount, src => src.MapFrom(x => -1 * x.CommentVotes.Count(y => !y.Positive)))
                .ForMember(dest => dest.CanPositiveVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, true)))
                .ForMember(dest => dest.CanNegativeVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, false)))
           //     .ForMember(dest => dest.CanPositiveVote, 
              //      src => src.MapFrom(x => x.CommentVotes.Any(y => y.Positive && y.UserId == currentUserId)))
             //   .ForMember(dest => dest.CanNegativeVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, false)))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));

            CreateMap<MaterialComment, GetCommentListByEntityIdQuery.CommentForEntityDto>()
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLowerInvariant()))
                .ForMember(dest => dest.PositiveCount, src => src.MapFrom(x => x.CommentVotes.Count(y => y.Positive)))
                .ForMember(dest => dest.NegativeCount, src => src.MapFrom(x => -1 * x.CommentVotes.Count(y => !y.Positive)))
                .ForMember(dest => dest.CanPositiveVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, true)))
                .ForMember(dest => dest.CanNegativeVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, false)));

            CreateMap<MaterialComment, GetLastCommentListQuery.LastCommentDto>()
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLowerInvariant()))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName));

            CreateMap<CreateCommentCommand.Request, MaterialComment>();

            CreateMap<UpdateCommentCommand.Request, MaterialComment>();
        }

        private static bool CanComment(IEnumerable<CommentVote> votes, int? currentUserId, bool positive)
        {
            if (currentUserId == null)
            {
                return false;
            }
            return !votes.Any(x => x.Positive == positive && x.UserId == currentUserId);
        }
    }
}
