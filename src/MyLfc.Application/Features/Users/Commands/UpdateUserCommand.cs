using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Users.Commands;

public class UpdateUserCommand
{
    public class Request : IRequest<Response>
    {
        public string FullName { get; set; }

        public bool Gender { get; set; }

        public DateTimeOffset? Birthday { get; set; }

    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;

        private readonly RequestContext _requestContext;

        public Handler(ILiverpoolContext context, RequestContext requestContext, IMapper mapper)
        {
            _context = context;
            _requestContext = requestContext;
            _mapper = mapper;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(x => x.Id == _requestContext.UserId, cancellationToken);

            if (user == null)
            {
                throw new NotFoundException(nameof(FullUser), _requestContext.UserId);
            }

            user = _mapper.Map(request, user);

            await _context.SaveChangesAsync(cancellationToken);

            return new Response();
        }
    }

    public class Response
    {

    }
}
