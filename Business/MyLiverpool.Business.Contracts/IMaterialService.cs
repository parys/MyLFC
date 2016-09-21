using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialService
    {
        Task<bool> DeleteAsync(int id, int userId);

        Task<bool> ActivateAsync(int id);

        Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(MaterialFiltersDto filters);

        Task<MaterialDto> GetDtoAsync(int id);

        Task<bool> CreateAsync(MaterialDto dto, int userId, MaterialType materialType);

        Task<bool> EditAsync(MaterialDto dto, int userId);

        Task<bool> AddViewAsync(int id);
    }
}
