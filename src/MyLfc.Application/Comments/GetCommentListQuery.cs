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

            private readonly IMapper _mapper;

            private readonly RequestContext _requestContext;
            
            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comments = _context.MaterialComments.AsNoTracking()
                    .Include(x => x.Author)
                    .Include(x => x.CommentVotes)
                    .Where(x => !x.Pending);

                if (request.OnlyUnverified.GetValueOrDefault())
                {
                    comments = comments.Where(x => !x.IsVerified);
                }

                if (request.UserId.HasValue)
                {
                    comments = comments.Where(x => x.AuthorId == request.UserId.Value);
                }

                comments = comments.OrderByDescending(x => x.AdditionTime);

                var results = await comments.Skip(request.SkipCount()).Take(request.PageSize).ToListAsync(cancellationToken);
                UpdateCurrentUserField(results);

                return new Response
                {
                    Results = _mapper.Map<List<CommentListDto>>(results),
                    CurrentPage = request.CurrentPage,
                    PageSize = request.PageSize,
                    RowCount = await comments.CountAsync(cancellationToken)
                };
            }

            private void UpdateCurrentUserField(ICollection<MaterialComment> comments)
            {
                foreach (var materialComment in comments)
                {
                    materialComment.CurrentUserId = _requestContext.UserId;
                }
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
