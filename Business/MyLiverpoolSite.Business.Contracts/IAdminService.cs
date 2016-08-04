using System.Threading.Tasks;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAdminService
    {
        Task<bool> UpdateTableAsync();
    }
}
