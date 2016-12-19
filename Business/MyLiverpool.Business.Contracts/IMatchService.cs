using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMatchService : IEntityService<MatchDto>
    {
        Task<PageableData<MatchDto>> GetListAsync(int page);
    }
}
