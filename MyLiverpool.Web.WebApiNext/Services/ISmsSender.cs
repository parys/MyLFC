using System.Threading.Tasks;

namespace MyLiverpool.Web.WebApiNext.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
