using System.Threading.Tasks;

namespace MyLfc.Business.Contracts;

public interface IEmailSender
{
    Task SendEmailAsync(string email, string subject, string message);

    Task SendNewPmToEmailAsync(int userId, string message, int pmId);

    Task SendEmailAsync(string subject, string message);
}
