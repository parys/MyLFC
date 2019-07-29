using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using MyLfc.Application.Users;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Services
{
    public class AuthMessageSender : IEmailSender
    {
        private readonly IOptions<EmailSettings> _settings;
        private readonly ILogger<AuthMessageSender> _logger;
        private readonly IHttpContextAccessor _accessor;
        private readonly IMediator _mediator;

        public AuthMessageSender(IOptions<EmailSettings> settings, ILogger<AuthMessageSender> logger, IHttpContextAccessor accessor, IMediator mediator)
        {
            _settings = settings;
            _logger = logger;
            _accessor = accessor;
            _mediator = mediator;
        }

        public async Task SendEmailAsync(string email, string subject, string message)
        {
            if (string.IsNullOrWhiteSpace(_settings.Value.Email) || string.IsNullOrWhiteSpace(_settings.Value.Password))
            {
                return;
            }
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress(_settings.Value.Author, _settings.Value.Email));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart("html") { Text = message };
            try
            {
                using (var client = new SmtpClient())
                {
                    //TODO fix and test on test env
                    client.ServerCertificateValidationCallback = (s, c, ch, e) => true;

                    await client.ConnectAsync(_settings.Value.Host, _settings.Value.Port, SecureSocketOptions.Auto);
                    await client.AuthenticateAsync(_settings.Value.Email, _settings.Value.Password);

                    await client.SendAsync(emailMessage);
                    await client.DisconnectAsync(true);
                }
            }
            catch (Exception ex) //todo add another try to send email
            {
                _logger.LogCritical(ex.ToString());
                //  await SendEmailAsync(email, subject, message); how to stop after some tries
                var e = ex;
                throw; //todo add private messate to admin?
            }
        }

        public async Task SendNewPmToEmailAsync(int userId, string message, int pmId)
        {
            var config = await _mediator.Send(new GetUserConfigQuery.Request {UserId = userId});
            if (config.IsPmToEmailNotifyEnabled)
            {
                var user = await _mediator.Send(new GetUserDetailQuery.Request {Id = userId});
                if (user != null)
                {
                    var host = _accessor.HttpContext.Request.Host;
                    var title = "Вам пришло новое личное сообщение.";
                    var body = $"Пользователь {user.UserName} отправил вам личное сообщение. <a href='http://{host}/pms/{pmId}'>Перейти к нему</a>";
                    await SendEmailAsync(user.Email, title, body);
                }
            }
        }

        public async Task SendEmailAsync(string subject, string message)
        {
            await SendEmailAsync(_settings.Value.EmailForWishCreationNotification, subject, message);
        }
    }
}
