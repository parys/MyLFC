using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Account
{
    public class IsEmailUniqueQuery
    {
        public class Request : IRequest<Response>
        {
            public string Email { get; set; }
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly UserManager<FullUser> _userManager;

            public Handler(UserManager<FullUser> userManager)
            {
                _userManager = userManager;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var foundUser = await _userManager.FindByEmailAsync(request.Email);
                return new Response {Result = foundUser == null};
            }
        }

        public class Response
        {
            public bool Result { get; set; }
        }
    }
}
