using System.Threading.Tasks;

namespace MyLiverpool.Business.Contracts
{
    public interface IAdminService
    {
        Task<bool> UpdateTableAsync();
    }
}
