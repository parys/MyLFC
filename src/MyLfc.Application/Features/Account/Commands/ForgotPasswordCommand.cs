using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using MyLfc.Business.Contracts;
using MyLfc.Common.Utilities;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Account.Commands;

public class ForgotPasswordCommand
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
        private readonly IEmailSender _messageService;
        private readonly IOptions<EmailSettings> _settings;

        public Handler(UserManager<FullUser> userManager, IOptions<EmailSettings> settings, IEmailSender messageService)
        {
            _userManager = userManager;
            _settings = settings;
            _messageService = messageService;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user is not { EmailConfirmed: true })
            {
                return new Response { Result = false };
            }
            await SendForgotPasswordEmailAsync(user);
            return new Response { Result = true };
        }

        private async Task<string> GetForgotPasswordBody(FullUser user)
        {
            string code = await _userManager.GeneratePasswordResetTokenAsync(user);
            code = code.Base64ForUrlEncode();

            var callbackUrl = $"{_settings.Value.UiUrl}/account/resetPassword?code={code}";
            return $"Пожалуйста, сбросьте ваш пароль, кликнув <a href=\"{callbackUrl}\"> здесь</a>.";
        }


        private async Task SendForgotPasswordEmailAsync(FullUser user)
        {
            const string forgotPassword = "Восстановление забытого пароля";
            await _messageService.SendEmailAsync(user.Email, forgotPassword, await GetForgotPasswordBody(user));
        }
    }

    public class Response
    {
        public bool Result { get; set; }
    }
}
