using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Common.Utilities.Extensions;

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
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comment = await _context.MaterialComments
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (comment == null)
                {
                    throw new NotFoundException(nameof(MaterialComment), request.Id);
                }

                comment = _mapper.Map(request, comment);
                comment.IsVerified = _requestContext.User.IsSiteTeamMember();

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = comment.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
