using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IMatchService : IEntityService<MatchDto>
    {
        Task<IEnumerable<MatchDto>> GetForCalendarAsync();
    }
}
