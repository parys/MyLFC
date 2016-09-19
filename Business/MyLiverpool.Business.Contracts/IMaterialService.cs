using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialService
    {
        Task<bool> DeleteAsync(int id, int userId, MaterialType materialType);

        Task<bool> ActivateAsync(int id, MaterialType materialType);

        Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(MaterialFiltersDto filters);

        Task<MaterialDto> GetDtoAsync(int id, MaterialType materialType);

        Task<bool> CreateAsync(MaterialDto dto, int userId, MaterialType materialType);

        Task<bool> EditAsync(MaterialDto dto, int userId, MaterialType materialType);

        Task<bool> AddViewAsync( int id, MaterialType materialType);
    }
}
