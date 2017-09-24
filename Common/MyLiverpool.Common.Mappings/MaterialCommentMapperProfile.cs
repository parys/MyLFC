using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class MaterialCommentMapperProfile : Profile
    {
        public MaterialCommentMapperProfile()
        {
            RegisterMaterialCommentMapping();
        }
        
        private void RegisterMaterialCommentMapping()
        {
            CreateMap<MaterialComment, MaterialCommentDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Children, src => src.MapFrom(x => x.Children))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.PositiveCount, src => src.MapFrom(x => x.CommentVotes.Count(y => y.Positive)))
                .ForMember(dest => dest.NegativeCount, src => src.MapFrom(x => -1*x.CommentVotes.Count(y => !y.Positive)))
                .ForMember(dest => dest.CanPositiveVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, true)))
                .ForMember(dest => dest.CanNegativeVote, src => src.MapFrom(x => CanComment(x.CommentVotes, x.CurrentUserId, false)))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));

            CreateMap<MaterialCommentDto, MaterialComment>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message.Trim()))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.ParentId, src => src.MapFrom(x => x.ParentId));

            CreateMap<CommentVoteDto, CommentVote>();
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
