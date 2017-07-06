using System.Threading.Tasks;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface IHelperService
    {
        Task<string> GetAsync(HelperEntityType type);

        Task<bool> UpdateAsync(HelperEntityType type, string newValue);
    }
}
