using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IWishService
    {
        Task<WishDto> CreateAsync(WishDto dto);

        Task<PageableData<WishDto>> GetListAsync(int page, int? typeId = null, string filterText = null);

        Task<WishDto> GetAsync(int wishId);

        Task<bool> DeleteAsync(int id);
    }
}