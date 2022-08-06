using System.IO;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Common.Utilities;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Users.Commands;

public class ResetUserAvatarCommand
{
    private static readonly string DefaultPhotoPath = Path.Combine("content", "avatars", "default.png");
    public class Request : IRequest<Response>
    {
        public int UserId { get; set; }
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
            if (FileHelper.Delete(user.Photo))
            {
                user.Photo = DefaultPhotoPath;
            }

            await _context.SaveChangesAsync(cancellationToken);

            return new Response { AvatarPath = DefaultPhotoPath };
        }
    }


    public class Response
    {
        public string AvatarPath { get; set; }
    }
}
