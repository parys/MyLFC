using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Services
{
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        private readonly IOptions<EmailSettings> _settings;
        private readonly ILogger<AuthMessageSender> _logger;
        private readonly IUserService _userService;
        private readonly IHttpContextAccessor _accessor;

        public AuthMessageSender(IOptions<EmailSettings> settings, ILogger<AuthMessageSender> logger, IUserService userService, IHttpContextAccessor accessor)
        {
            _settings = settings;
            _logger = logger;
            _userService = userService;
            _accessor = accessor;
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
                var client = new SmtpClient();
                await client.ConnectAsync(_settings.Value.Host, _settings.Value.Port);
                await client.AuthenticateAsync(_settings.Value.Email, _settings.Value.Password);

                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
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
            var config = await _userService.GetUserConfigAsync(userId);
            if (config.IsPmToEmailNotifyEnabled)
            {
                var user = await _userService.GetUserAsync(userId);
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

        public Task SendSmsAsync(string number, string message)
        {
            return Task.FromResult(0);
        }
    }
}
