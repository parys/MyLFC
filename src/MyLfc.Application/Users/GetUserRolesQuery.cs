using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Users
{
    public class GetUserRolesQuery
    {
        public class Request : IRequest<Response>
        {
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly UserManager<User> _userManager;

            private readonly RequestContext _requestContext;

            public Handler(RequestContext requestContext, UserManager<User> userManager)
            {
                _requestContext = requestContext;
                _userManager = userManager;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByIdAsync(_requestContext.UserId.ToString());
                if (user == null)
                {
                    throw new NotFoundException(nameof(User), _requestContext.UserId);
                }

                var roles = await _userManager.GetRolesAsync(user);
                return new Response
                {
                    UserId = _requestContext.UserId.Value,
                    UserName = _requestContext.User.Claims.First(x => x.Type == "name").Value,
                    Roles = roles
                };
            }
        }


        public class Response
        {
            public int UserId { get; set; }

            public string UserName { get; set; }

            public IList<string> Roles { get; set; }
        }
    }
}
