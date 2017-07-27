using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IInjuryService : IEntityService<InjuryDto>
    {
        Task<PageableData<InjuryDto>> GetListAsync(int page, int itemsPerPage = 15);

        Task<IEnumerable<InjuryDto>> GetCurrentListAsync();
    }
}
