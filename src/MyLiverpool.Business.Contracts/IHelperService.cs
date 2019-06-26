using System.Threading.Tasks;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface IHelperService
    {
        Task<string> GetValueAsync(HelperEntityType type);

        Task<HelpEntity> GetAsync(HelperEntityType type);

        Task<bool> CreateOrUpdateAsync(HelperEntityType type, string newValue);

        Task<string> SanitizeRudWordsAsync(string message);
    }
}
