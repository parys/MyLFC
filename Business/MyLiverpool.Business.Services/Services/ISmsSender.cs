using System.Threading.Tasks;

namespace MyLiverpool.Business.Services.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
