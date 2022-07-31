using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using MyLfc.Application.Infrastructure;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Account;

public class ChangePasswordCommand
{
    public class Request : IRequest<Response>
    {
        public string OldPassword { get; set; }

        public string NewPassword { get; set; }
        
        public string ConfirmPassword { get; set; }
    }


    public class Validator : AbstractValidator<Request>
    {
        public Validator()
        {
            RuleFor(x => x.OldPassword).NotEmpty();
            RuleFor(x => x.NewPassword).NotEmpty();
            RuleFor(x => x.ConfirmPassword).NotEmpty();
        }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly UserManager<FullUser> _userManager;
        private readonly RequestContext _requestContext;

        public Handler(UserManager<FullUser> userManager, RequestContext requestContext)
        {
            _userManager = userManager;
            _requestContext = requestContext;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByIdAsync(_requestContext.UserId.ToString());
            if (user == null)
            {
                return (Response) IdentityResult.Failed(new IdentityError{Code = "404", Description = "User not found"});
            }

            var result = await _userManager.ChangePasswordAsync(user, request.OldPassword, request.NewPassword);

            return new Response {Result = result};
        }
    }

    public class Response : IdentityResult
    {
        public IdentityResult Result { get; set; }
    }
}
