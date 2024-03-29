﻿using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Users.Commands;

public class ChangeUsernameCommand
{
    public class Request : IRequest<Response>
    {
        public int UserId { get; set; }

        public string Username { get; set; }
    }

    public class Validator : AbstractValidator<Request>
    {
        public Validator()
        {
            RuleFor(x => x.Username).NotEmpty();

            RuleFor(x => x.UserId).GreaterThan(0);
        }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        public Handler(ILiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == request.UserId, cancellationToken);
            if (user == null)
            {
                throw new NotFoundException(nameof(FullUser), request.UserId);
            }

            user.UserName = request.Username;
            user.NormalizedUserName = request.Username.ToUpper();

            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Result = true };
        }
    }

    public class Response
    {
        public bool Result { get; set; }
    }
}
