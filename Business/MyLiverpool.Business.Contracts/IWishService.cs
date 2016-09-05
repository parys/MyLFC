using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IWishService
    {
        Task<WishDto> CreateAsync(WishDto dto);

        Task<PageableData<WishDto>> GetListAsync(int page, int? typeId, string filterText);

        Task<WishDto> GetAsync(int wishId);

        Task<bool> DeleteAsync(int id);
    }
}