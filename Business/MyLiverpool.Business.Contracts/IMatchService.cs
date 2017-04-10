using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMatchService : IEntityService<MatchDto>
    {
        Task<PageableData<MatchDto>> GetListAsync(int page, int itemsPerPage = 15, int? seasonId = null);

        Task<IEnumerable<MatchDto>> GetListForSeasonAsync(int seasonId);

        Task<MatchDto> UpdateScoreAsync(int matchId, string newScore);

        Task<IEnumerable<MatchDto>> GetForCalendarAsync();
    }
}
