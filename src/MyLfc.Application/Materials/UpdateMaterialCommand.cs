using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class UpdateMaterialCommand
    {
        public class Request : UpsertMaterialCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertMaterialCommand.Validator<Request>
        {
            public Validator() : base()
            {
                RuleFor(v => v.Id).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly RequestContext _requestContext;
            
            public Handler(ILiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var material = await _context.Materials
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (material == null)
                {
                    throw new NotFoundException(nameof(Material), request.Id);
                }

                if (!_requestContext.User.IsInRole(nameof(RolesEnum.NewsFull)) &&
                    !_requestContext.User.IsInRole(nameof(RolesEnum.BlogFull)))
                {
                    if (material.AuthorId != _requestContext.User?.GetUserId())
                    {
                        throw new UnauthorizedAccessException();
                    }

                    request.Pending = true;
                }

                material = _mapper.Map(request, material);
                material.LastModified = DateTimeOffset.UtcNow;

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = material.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
