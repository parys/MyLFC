using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Users
{
    public class UnbanUserCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly UserManager<User> _userManager;

            public Handler(LiverpoolContext context, UserManager<User> userManager)
            {
                _context = context;
                _userManager = userManager;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                if (user == null)
                {
                    throw new NotFoundException(nameof(User), request.Id);
                }

                var result = await _userManager.SetLockoutEndDateAsync(user,
                    new DateTimeOffset?());

                await _context.SaveChangesAsync(cancellationToken);
                if (!result.Succeeded)
                {
                    throw new Exception("Can't unban user");
                }
                return new Response { Id = request.Id };
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
