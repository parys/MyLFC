using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Users
{
    public class GetUserDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }

            public bool IsModerator { get; set; } = false;
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _context.Users
                    .AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (user == null)
                {
                    throw new NotFoundException(nameof(User), request.Id);
                }

                if (!request.IsModerator)
                {
                    user.Ip = string.Empty;
                    user.Email = string.Empty;
                }

                return user;
            }
        }


        public class Response
        {
            public int Id { get; set; }

            public string Email { get; set; }

            public bool EmailConfirmed { get; set; }

            public string UserName { get; set; }

            public string FullName { get; set; }

            public bool Gender { get; set; }

            public DateTimeOffset RegistrationDate { get; set; }

            public DateTimeOffset LastModifiedOn { get; set; }

            public DateTimeOffset? Birthday { get; set; }

            public string RoleGroupName { get; set; }

            public int RoleGroupId { get; set; }

            public DateTimeOffset? LockoutEnd { get; set; }

            public string Photo { get; set; }

            public int NewsCount { get; set; }

            public int BlogsCount { get; set; }

            public int CommentsCount { get; set; }

            public string Ip { get; set; }
        }
    }
}
