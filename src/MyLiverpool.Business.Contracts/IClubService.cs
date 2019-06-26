using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface IClubService : IEntityService<ClubDto>
    {
        Task<string> GetNameAsync(int clubId);

        Task UpdateLogoAsync(int clubId, string relativePath);

        Task UpdateLogoAsync(string clubName, string relativePath);

        Task<PageableData<ClubDto>> GetListAsync(ClubFiltersDto filters);

        Task<IEnumerable<KeyValuePair<int, string>>> GetClubsByNameAsync(string typed);

        Task<IEnumerable<KeyValuePair<int, string>>> GetClubsByNameWithoutLiverpoolAsync(string typed);
        
        Task<ClubDto> GetByNameAsync(string name);
    }
}
