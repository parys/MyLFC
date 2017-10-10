using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IMatchEventService : IEntityService<MatchEventDto>
    {
        Task<IEnumerable<MatchEventDto>> GetListByMatchIdAsync(int matchId);

        Task<IEnumerable<PersonStatisticDto>> GetStatistics(int seasonId);
    }
}
