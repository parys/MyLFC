using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using MyLfc.Domain;
using MyLfc.Business.Contracts;
using MyLfc.Common.Utilities;

namespace MyLfc.Application.Features.Account;

public class ResendConfirmEmailCommand
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
            if (user == null || user.EmailConfirmed)
            {
                return new Response { Result = false };
            }
            await SendConfirmEmailAsync(user);
            return new Response {Result = true};
        }

        //TODO duplicate in register
        private async Task SendConfirmEmailAsync(FullUser user)
        {
            const string registerFinished = "Завершение регистрации";
            await _messageService.SendEmailAsync(user.Email, registerFinished, await GetConfirmEmailBody(user));
        }

        private async Task<string> GetConfirmEmailBody(FullUser user)
        {
            string code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = code.Base64ForUrlEncode();

            var callbackUrl = $"{_settings.Value.UiUrl}/account/confirmEmail?userId={user.Id}&code={code}";
            return $"Пожалуйста, подтвердите ваш аккаунт, кликнув <a href=\"{callbackUrl}\">здесь</a>.";
        }
    }

    public class Response
    {
        public bool Result { get; set; }
    }
}
