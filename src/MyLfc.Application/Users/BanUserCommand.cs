using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Users;

public class BanUserCommand
{
    public class Request : IRequest<Response>
    {
        public int Id { get; set; }

        public int Days { get; set; }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly UserManager<FullUser> _userManager;

        public Handler(ILiverpoolContext context, UserManager<FullUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
            if (user == null)
            {
                throw new NotFoundException(nameof(FullUser), request.Id);
            }

            var result = await _userManager.SetLockoutEndDateAsync(user, DateTimeOffset.UtcNow.AddDays(request.Days));

            await _context.SaveChangesAsync(cancellationToken);
            if (!result.Succeeded)
            {
                throw new Exception("Can't ban user");
            }
            return new Response { Id = request.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
