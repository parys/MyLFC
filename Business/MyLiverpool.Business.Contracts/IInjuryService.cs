using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IInjuryService : IEntityService<InjuryDto>
    {
        Task<PageableData<InjuryDto>> GetListAsync(InjuryFiltersDto filters);

        Task<IEnumerable<InjuryDto>> GetCurrentListAsync();
    }
}
