using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IMatchService : IEntityService<MatchDto>
    {
        Task<PageableData<MatchDto>> GetListAsync(int page);
    }
}
