using System.Security.Claims;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialService
    {
        Task<bool> DeleteAsync(int id, ClaimsPrincipal claims);

        Task<bool> ActivateAsync(int id, ClaimsPrincipal claims);

        Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(MaterialFiltersDto filters);

        Task<MaterialDto> GetDtoAsync(int id);

        Task<MaterialDto> CreateAsync(MaterialDto dto, int userId);

        Task<MaterialDto> EditAsync(MaterialDto dto);

        Task<bool> AddViewAsync(int id);
    }
}
