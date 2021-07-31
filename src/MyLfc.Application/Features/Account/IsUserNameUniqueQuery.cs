using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Account
{
    public class IsUserNameUniqueQuery
    {
        public class Request : IRequest<Response>
        {
            public string UserName { get; set; }
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.UserName).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly UserManager<User> _userManager;

            public Handler(UserManager<User> userManager)
            {
                _userManager = userManager;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var foundUser = await _userManager.FindByNameAsync(request.UserName);
                return new Response {Result = foundUser == null};
            }
        }

        public class Response
        {
            public bool Result { get; set; }
        }
    }
}
