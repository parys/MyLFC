using System.Threading.Tasks;

namespace MyLiverpool.Business.Contracts
{
    public interface IHelperService
    {
        Task<string> GetEplTableAsync();
    }
}
