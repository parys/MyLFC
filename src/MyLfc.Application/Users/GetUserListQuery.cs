using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Users
{
    public class GetUserListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public int? RoleGroupId { get; set; }

            public string UserName { get; set; }

            public string Ip { get; set; }
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
                var users = _context.Users.AsNoTracking();


                if (request.RoleGroupId.HasValue)
                {
                    users = users.Where(x => x.RoleGroupId == request.RoleGroupId.Value);
                }
                if (!string.IsNullOrWhiteSpace(request.UserName))
                {
                    users = users.Where(x => x.UserName.Contains(request.UserName));
                }
                if (!string.IsNullOrWhiteSpace(request.Ip))
                {
                    users = users.Where(x => x.Ip.Contains(request.Ip));
                }

                Expression<Func<User, object>> sortBy = x => x.LastModified;
                request.SortDirection = "Desc";
                if (!string.IsNullOrWhiteSpace(request.SortOn))
                {
                    if (request.SortOn.Contains("RoleGroupName", StringComparison.InvariantCultureIgnoreCase))
                    {
                        sortBy = x => x.RoleGroup.RussianName;
                    }
                    if (request.SortOn.Contains("RegistrationDate", StringComparison.InvariantCultureIgnoreCase))
                    {
                        sortBy = x => x.RegistrationDate;
                    }
                    else if (request.SortOn.Contains("CommentsCount", StringComparison.InvariantCultureIgnoreCase))
                    {
                        sortBy = x => x.Comments.Count;
                    }
                    else if (request.SortOn.Contains("UserName", StringComparison.InvariantCultureIgnoreCase))
                    {
                        sortBy = x => x.UserName;
                    }
                }

                return await users.GetPagedAsync<Response, User, UserListDto>(request, _mapper, sortBy);
            }
        }


        public class Response : PagedResult<UserListDto>
        {
        }


        public class UserListDto
        {
            public int Id { get; set; }

            public string UserName { get; set; }

            public bool EmailConfirmed { get; set; }

            public int CommentsCount { get; set; }

            public DateTimeOffset LastModified { get; set; }

            public DateTimeOffset RegistrationDate { get; set; }

            public string RoleGroupName { get; set; }

            public string Photo { get; set; }
        }
    }
}
