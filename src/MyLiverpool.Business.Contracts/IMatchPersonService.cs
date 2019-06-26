using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IMatchPersonService : IEntityService<MatchPersonDto>
    {
        Task<IEnumerable<MatchPersonDto>> GetListByMatchIdAsync(int matchId);

        Task<bool> DeleteAsync(int matchId, int personId);
    }
}
