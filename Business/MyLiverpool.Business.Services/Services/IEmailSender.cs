using System.Threading.Tasks;

namespace MyLiverpool.Business.Services.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);

        Task SendEmailAsync(string subject, string message);
    }
}
