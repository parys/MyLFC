using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Services.Services
{
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        private readonly IOptions<EmailSettings> _settings;

        public AuthMessageSender(IOptions<EmailSettings> settings)
        {
            _settings = settings;
        }

        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress(_settings.Value.Author, _settings.Value.Email));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart("html") {Text = message};
            try
            {
                var client = new SmtpClient();
                //     {
                // client.Connect("smtp.gmail.com", 587, SecureSocketOptions.Auto);
                // client.Authenticate(_settings.Value.Email, _settings.Value.Password);
                //  client.Send(emailMessage);
                // client.Disconnect(true);
                await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.Auto);
                await client.AuthenticateAsync(_settings.Value.Email, _settings.Value.Password);

                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
                //  }
            }
            catch (Exception ex)
            {
                var e = ex;
                throw;
            }
           
        }

        public Task SendSmsAsync(string number, string message)
        {
            return Task.FromResult(0);
        }
    }
}
