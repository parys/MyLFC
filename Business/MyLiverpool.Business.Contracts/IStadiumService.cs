using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IStadiumService
    {
        Task<StadiumDto> GetByIdAsync(int id);

        Task<PageableData<StadiumDto>> GeListAsync(int page);

        Task<StadiumDto> CreateAsync(StadiumDto dto);

        Task<StadiumDto> UpdateAsync(StadiumDto dto);

        Task<bool> DeleteAsync(int id);
    }
}
