using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using MyLfc.Application.Comments.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Comments
{
    public class CommentProfile : Profile
    {
        public CommentProfile()
        {
            CreateMap<Comment, GetCommentListQuery.CommentListDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()))
                .ForMember(dest => dest.PositiveCount, src => src.MapFrom(x => x.PositiveCount))
                .ForMember(dest => dest.NegativeCount, src => src.MapFrom(x => -1 * x.NegativeCount))
                .ForMember(dest => dest.CanPositiveVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, true)))
                .ForMember(dest => dest.CanNegativeVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, false)))
           //     .ForMember(dest => dest.CanPositiveVote, 
              //      src => src.MapFrom(x => x.CommentVotes.Any(y => y.Positive && y.UserId == currentUserId)))
             //   .ForMember(dest => dest.CanNegativeVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, false)))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));

            CreateMap<Comment, GetCommentListByEntityIdQuery.CommentForEntityDto>()
                .ForMember(dest => dest.Children, src => src.Ignore())
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLowerInvariant()))
                .ForMember(dest => dest.PositiveCount, src => src.MapFrom(x => x.PositiveCount))
                .ForMember(dest => dest.NegativeCount, src => src.MapFrom(x => -1 * x.NegativeCount))
;

            CreateMap<Comment, GetLastCommentListQuery.LastCommentDto>()
                .ForMember(dest => dest.ClippedMessage, src => src.Ignore())
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName));

            CreateMap<CreateCommentCommand.Request, Comment>()
                .ForMember(x => x.Message, src => src.MapFrom(x => x.Message.Trim()))
                ; ;

            CreateMap<UpdateCommentCommand.Request, Comment>()
                .ForMember(x => x.Message, src => src.MapFrom(x => x.Message.Trim()))
                ; ;

            //todo TEMPORARY
            CreateMap<Comment, CreateCommentCommand.Response>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()));


            //todo TEMPORARY
            CreateMap<Comment, UpdateCommentCommand.Response>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString().ToLower()));


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
