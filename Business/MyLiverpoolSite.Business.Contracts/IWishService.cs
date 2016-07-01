using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IWishService
    {
        Task<WishDto> CreateAsync(WishDto dto);

        Task<List<WishDto>> GetListAsync(int page);

        Task<WishDto> GetAsync(int wishId);

        Task<bool> DeleteAsync(int id);
    }
}