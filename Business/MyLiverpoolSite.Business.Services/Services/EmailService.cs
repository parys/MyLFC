using System.Configuration;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class EmailService : IIdentityMessageService
    {
        private readonly string _mailAddress = ConfigurationManager.AppSettings["emailAddress"];
        private readonly string _senderName = ConfigurationManager.AppSettings["emailAuthor"];
        private readonly string _fromPassword = ConfigurationManager.AppSettings["emailPassword"];
        private MailAddress _fromAddress;

        public Task SendAsync(IdentityMessage message)
        {
            _fromAddress = new MailAddress(_mailAddress, _senderName);
            SendByGmail(message);
            return Task.FromResult(0);
        }

        private void SendByGmail(IdentityMessage message)
        {
            var toAddress = new MailAddress(message.Destination, "");

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(_fromAddress.Address, _fromPassword)
            };
            using (var messageToSend = new MailMessage(_fromAddress, toAddress)
            {
                Subject = message.Subject,
                Body = message.Body,
                IsBodyHtml = true
            })
            {
                smtp.Send(messageToSend);
            }
        }
    }
}
