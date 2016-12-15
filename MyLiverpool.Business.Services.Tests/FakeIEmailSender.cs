using System.Threading.Tasks;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Business.Services.Tests
{
    public class FakeIEmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            return Task.CompletedTask;
        }

        public Task SendEmailAsync(string subject, string message)
        {
            return Task.CompletedTask;
        }
    }
}
