using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using MyLfc.Common.Utilities;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Account;

public class ResetPasswordCommand
{
    public class Request : IRequest<Response>
    {
        public string Code { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }
        
        public string ConfirmPassword { get; set; }
    }


    public class Validator : AbstractValidator<Request>
    {
        public Validator()
        {
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Password).NotEmpty();
            RuleFor(x => x.ConfirmPassword).NotEmpty();
            RuleFor(x => x.Code).NotEmpty();
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
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                return new Response { Result = IdentityResult.Failed(new IdentityError{Code = "404", Description = "User not found"})};
            }

            var result = await _userManager.ResetPasswordAsync(user, request.Code.Base64ForUrlDecode(), request.Password);

            return new Response {Result = result};
        }

    }

    public class Response
    {
        public IdentityResult Result { get; set; }
    }
}
