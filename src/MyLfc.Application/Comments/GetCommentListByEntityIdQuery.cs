using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Comments
{
    public class GetCommentListByEntityIdQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public int? MatchId { get; set; }

            public int? MaterialId { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;
            private readonly IMapper _mapper;
            private readonly RequestContext _requestContext;

            public Handler(LiverpoolContext context, RequestContext requestContext, IMapper mapper)
            {
                _context = context;
                _requestContext = requestContext;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var commentsQuery = _context.MaterialComments
                    .Include(x => x.Author)
                    .Include(x => x.CommentVotes)
                    .AsNoTracking();

                if (request.MatchId.HasValue)
                {
                    commentsQuery = commentsQuery.Where(x => x.MatchId == request.MatchId);
                }
                else if (request.MaterialId.HasValue)
                {
                    commentsQuery = commentsQuery.Where(x => x.MaterialId == request.MaterialId);
                }

                commentsQuery = commentsQuery.OrderBy(x => x.AdditionTime);

                var comments = await commentsQuery.Select(x=> new CommentForEntityDto
                {
                    AdditionTime = x.AdditionTime,
                    Answer = x.Answer,
                    AuthorId = x.AuthorId,
                    AuthorUserName = x.Author.UserName,
                    CanNegativeVote = !x.CommentVotes.Any(v => !v.Positive && v.UserId == _requestContext.UserId),
                    CanPositiveVote = !x.CommentVotes.Any(v => v.Positive && v.UserId == _requestContext.UserId),
                    IsVerified = x.IsVerified,
                    MatchId = x.MatchId,
                    MaterialId = x.MaterialId,
                    Id = x.Id,
                    LastModified = x.LastModified,
                    Message = x.Message,
                    NegativeCount = x.CommentVotes.Count(v => !v.Positive),
                    PositiveCount = x.CommentVotes.Count(v => v.Positive),
                    ParentId = x.ParentId,
                    Photo = x.Author.Photo,
                    Type = x.Type,
                    TypeName = x.Type.ToString()
                }).ToListAsync(cancellationToken);
               //fdddddddddd UpdateCurrentUserField(comments);
                var unitedComments = UniteComments(comments, request.CurrentPage, request.PageSize);
            //    var commentDtos = _mapper.Map<List<CommentForEntityDto>>(unitedComments);
                //  filter = filter.And(x => x.ParentId == null);//bug need to analize how get all comments for material page but count only top-level for paging
                var commentsCount = await commentsQuery.CountAsync(cancellationToken);
                return new Response
                {
                    PageSize = request.PageSize,
                    CurrentPage = request.CurrentPage,
                    Results = unitedComments.ToList(),
                    RowCount = commentsCount
                };
            }


            private static IEnumerable<CommentForEntityDto> UniteComments(ICollection<CommentForEntityDto> comments, int page, int pageSize)
            {
                var startNumber = pageSize * (page - 1) + 1;
                foreach (var comment in comments)
                {
                    comment.Number = startNumber++;
                    if (comment.ParentId == null)
                    {
                        continue;
                    }
                    var parent = comments.FirstOrDefault(c => c.Id == comment.ParentId);
                    if (parent != null)
                    {
                        if (parent.Children == null)
                        {
                            parent.Children = new List<CommentForEntityDto>();
                        }
                        parent.Children.Add(comment);
                    }
                }
                return comments.Where(c => c.ParentId == null);
            }

            //private void UpdateCurrentUserField(ICollection<MaterialComment> comments)
            //{
            //    if (_requestContext.UserId.HasValue)
            //    {
            //        foreach (var materialComment in comments)
            //        {
            //            materialComment.CurrentUserId = _requestContext.UserId.Value; //todo need more elegant solution
            //        }
            //    }
            //}
        }


        public class Response : PagedResult<CommentForEntityDto>
        {
            
        }

        public class CommentForEntityDto
        {
            public int Id { get; set; }

            public int Number { get; set; }

            public DateTimeOffset AdditionTime { get; set; }
            public DateTimeOffset LastModified { get; set; }

            public string AuthorUserName { get; set; }

            public int AuthorId { get; set; }

            public string Photo { get; set; }

            public string Message { get; set; }

            public string Answer { get; set; }

            public int? MaterialId { get; set; }

            public int? MatchId { get; set; }

            public int? ParentId { get; set; }

            public ICollection<CommentForEntityDto> Children { get; set; } = new HashSet<CommentForEntityDto>();

            public bool IsVerified { get; set; }

            public bool CanPositiveVote { get; set; }

            public bool CanNegativeVote { get; set; }

            public int PositiveCount { get; set; }

            public int NegativeCount { get; set; }

            public CommentType Type { get; set; }

            public string TypeName { get; set; }
        }
    }
}
