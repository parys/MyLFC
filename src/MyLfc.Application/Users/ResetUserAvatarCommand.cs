using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Common.Utilities;

namespace MyLfc.Application.Users
{
    public class ResetUserAvatarCommand
    {
        private static readonly string DefaultPhotoPath = Path.Combine("content", "avatars", "default.png");
        public class Request : IRequest<Response>
        {
            public int UserId { get; set; }
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
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == request.UserId, cancellationToken);
                if (user == null)
                {
                    throw new NotFoundException(nameof(User), request.UserId);
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
}
