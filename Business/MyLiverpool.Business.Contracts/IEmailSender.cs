using System.Threading.Tasks;

namespace MyLiverpool.Business.Contracts
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);

        Task SendEmailAsync(string subject, string message);
    }
}
