using System;
using System.IO;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using MyLfc.Application.Features.Users.Queries;
using MyLfc.Business.Contracts;
using MyLfc.Common.Utilities;

namespace MyLfc.Business.Services;

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
        emailMessage.Body = new TextPart("html") { Text = await LoadTemplatesSync(message) };
        try
        {
            using var client = new SmtpClient();
            client.CheckCertificateRevocation = false;

            await client.ConnectAsync(_settings.Value.Host, _settings.Value.Port);
            await client.AuthenticateAsync(_settings.Value.Email, _settings.Value.Password);

            await client.SendAsync(emailMessage);
            await client.DisconnectAsync(true);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Error happened when try to send email {email} with subject {subject}");
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

    private static async Task<string> LoadTemplatesSync(string message)
    {
        var template = await File.ReadAllTextAsync(Path.Combine(AppContext.BaseDirectory, "HtmlTemplates", "EmailTemplate.html"));
        template = template.Replace("%messageText%", message);
        return template;
    }
}
