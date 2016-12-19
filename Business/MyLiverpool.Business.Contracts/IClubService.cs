using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IClubService : IEntityService<ClubDto>
    {
        Task<string> GetNameAsync(int clubId);

        Task UpdateLogoAsync(int clubId, string relativePath);

        Task UpdateLogoAsync(string clubName, string relativePath);

        Task<PageableData<ClubDto>> GetListAsync(int page);

        Task<IEnumerable<KeyValuePair<int, string>>> GetClubsByNameAsync(string typed);

        Task<int> GetIdByNameAsync(string name);
    }
}
