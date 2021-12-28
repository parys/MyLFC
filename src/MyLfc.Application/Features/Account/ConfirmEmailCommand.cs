using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using MyLfc.Domain;
using MyLfc.Common.Utilities;

namespace MyLfc.Application.Features.Account
{
    public class ConfirmEmailCommand
    {
        public class Request : IRequest<Response>
        {
            public string Code { get; set; }

            public int UserId { get; set; }
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.UserId).GreaterThan(0);
                RuleFor(x => x.Code).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly UserManager<User> _userManager;

            public Handler(UserManager<User> userManager)
            {
                _userManager = userManager;;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByIdAsync(request.UserId.ToString());
                var result = await _userManager.ConfirmEmailAsync(user, request.Code.Base64ForUrlDecode());
                return new Response {Result = result.Succeeded};
            }
        }


        public class Response
        {
            public bool Result { get; set; }
        }
    }
}
