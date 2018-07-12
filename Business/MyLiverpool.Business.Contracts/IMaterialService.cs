using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialService
    {
        Task<bool> DeleteAsync(int id, ClaimsPrincipal claims);

        Task<MaterialDto> ActivateAsync(int id, ClaimsPrincipal claims);

        Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(MaterialFiltersDto filters);

        Task<MaterialDto> GetDtoAsync(int id, bool hasAccess = false);

        Task<MaterialDto> CreateAsync(MaterialDto dto, int userId);

        Task<MaterialDto> EditAsync(MaterialDto dto);

        Task AddViewAsync(int id);

        Task<IEnumerable<string>> GetExtractedImageLinks(string url);
    }
}
