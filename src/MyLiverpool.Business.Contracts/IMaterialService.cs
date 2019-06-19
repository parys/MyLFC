using System.Security.Claims;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialService
    {
        Task<bool> DeleteAsync(int id, ClaimsPrincipal claims);

        Task<MaterialDto> ActivateAsync(int id, ClaimsPrincipal claims);
        
        Task<MaterialDto> CreateAsync(MaterialDto dto, int userId);

        Task<MaterialDto> EditAsync(MaterialDto dto);
    }
}
