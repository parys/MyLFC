using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto.Polls;

namespace MyLiverpool.Business.Contracts
{
    public interface IPollService : IEntityService<PollDto>
    {
        Task<IEnumerable<PollDto>> GetListAsync();
    }
}
