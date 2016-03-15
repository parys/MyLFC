using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace MyLiverpoolSite.Business.Services
{
    public class EmailService : IIdentityMessageService
    {
        public readonly MailAddress fromAddress = new MailAddress("myliverpoolru@gmail.com", "My Liverpool");
        string fromPassword = "123rfgbnfy5";

        public Task SendAsync(IdentityMessage message)
        {
            // Plug in your email service here to send an email.
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
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var messageToSend = new MailMessage(fromAddress, toAddress)
            {
                Subject = message.Subject,
                Body = message.Body
            })
            {
                smtp.Send(messageToSend);
            }
        }
    }
}
