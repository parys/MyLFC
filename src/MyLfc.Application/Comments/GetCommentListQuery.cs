using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Comments
{
    public class GetCommentListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public int? UserId { get; set; }

            public bool? OnlyUnverified { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;
            
            public Handler(LiverpoolContext context, RequestContext requestContext)
            {
                _context = context;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comments = _context.MaterialComments.AsNoTracking()
                    ;

                if (request.OnlyUnverified.GetValueOrDefault())
                {
                    comments = comments.Where(x => !x.IsVerified);
                }

                if (request.UserId.HasValue)
                {
                    comments = comments.Where(x => x.AuthorId == request.UserId.Value);
                }

                comments = comments.OrderByDescending(x => x.Id);

                var results = await comments.Skip(request.SkipCount()).Take(request.PageSize)
                    .Select(x => new CommentListDto
                    {
                        AdditionTime = x.AdditionTime,
                        Answer = x.Answer,
                        AuthorId = x.AuthorId,
                        AuthorUserName = x.Author.UserName,
                        CanNegativeVote = _requestContext.UserId.HasValue && !x.CommentVotes.Any(v => !v.Positive && v.UserId == _requestContext.UserId),
                        CanPositiveVote = _requestContext.UserId.HasValue && !x.CommentVotes.Any(v => v.Positive && v.UserId == _requestContext.UserId),
                        IsVerified = x.IsVerified,
                        MatchId = x.MatchId,
                        MaterialId = x.MaterialId,
                        Id = x.Id,
                        LastModified = x.LastModified,
                        Message = x.Message,
                        NegativeCount = x.CommentVotes.Count(v => !v.Positive),
                        PositiveCount = x.CommentVotes.Count(v => v.Positive),
                        Photo = x.Author.Photo,
                        Type = x.Type,
                        TypeName = x.Type.ToString()
                    }).ToListAsync(cancellationToken);

                return new Response
                {
                    Results = results,
                    CurrentPage = request.CurrentPage,
                    PageSize = request.PageSize,
                    RowCount = request.OnlyUnverified.GetValueOrDefault()
                        ? await _context.MaterialComments.Where(x => !x.IsVerified).CountAsync(cancellationToken)
                        : await _context.MaterialComments.CountAsync(cancellationToken)
                };
            }
        }


        [Serializable]
        public class Response : PagedResult<CommentListDto>
        {
        }


        [Serializable]
        public class CommentListDto
        {
            public int Id { get; set; }

            public DateTimeOffset AdditionTime { get; set; }
            public DateTimeOffset LastModified { get; set; }

            public string AuthorUserName { get; set; }

            public int AuthorId { get; set; }

            public string Photo { get; set; }

            public string Message { get; set; }

            public string Answer { get; set; }

            public int? MaterialId { get; set; }

            public int? MatchId { get; set; }
            
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
