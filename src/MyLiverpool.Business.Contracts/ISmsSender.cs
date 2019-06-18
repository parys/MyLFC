using System.Threading.Tasks;

namespace MyLiverpool.Business.Contracts
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
