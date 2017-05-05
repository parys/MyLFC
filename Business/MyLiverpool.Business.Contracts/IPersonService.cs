using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IPersonService
    {
        Task<PersonDto> CreateAsync(PersonDto dto);
        Task<PageableData<PersonDto>> GetListAsync(int page);
        Task<PersonDto> GetByIdAsync(int id);
        Task<PersonDto> UpdateAsync(PersonDto dto);
        Task<bool> DeleteAsync(int id);
        Task<PersonDto> GetBestPlayerAsync();
        Task SetBestPlayerAsync(int personId);
    }
}
