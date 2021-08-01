using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.HelpEntities;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Comments
{
    public class UpdateCommentCommand
    {
        public class Request : UpsertCommentCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertCommentCommand.Validator<Request>
        {
            public Validator()
            {
                RuleFor(v => v.Id).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;

            private readonly IMediator _mediator;
            
            public Handler(ILiverpoolContext context, IMapper mapper, RequestContext requestContext, IMediator mediator)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comment = await _context.MaterialComments
                    .Include(x => x.Author)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (comment == null)
                {
                    throw new NotFoundException(nameof(MaterialComment), request.Id);
                }

                var oldUnverifiedValue = comment.IsVerified;

                comment = _mapper.Map(request, comment);
                comment.IsVerified = _requestContext.User.IsSiteTeamMember();
                comment.LastModified = DateTimeOffset.UtcNow;

                var wasUnverifiedChanged = oldUnverifiedValue != comment.IsVerified;


                await _context.SaveChangesAsync(cancellationToken);

                if (wasUnverifiedChanged)
                {
                    await _mediator.Send(
                        new UpdateCommentsNumberCommand.Request
                            {DiffAllNumbers = 0, DiffUnverifiedNumbers = comment.IsVerified ? -1 : 1},
                        cancellationToken);
                }

                return _mapper.Map<Response>(comment);
            }
        }

        //todo temporary
        public class Response
        {
            public int Id { get; set; }

            public DateTimeOffset AdditionTime { get; set; }
            public DateTimeOffset LastModified { get; set; }

            public string AuthorUserName { get; set; }

            public int AuthorId { get; set; }

            public string Photo { get; set; }

            public string Message { get; set; }
            public string ClippedMessage { get; set; }

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
