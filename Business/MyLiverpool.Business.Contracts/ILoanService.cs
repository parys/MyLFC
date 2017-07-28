using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface ILoanService : IEntityService<LoanDto>
    {
        Task<PageableData<LoanDto>> GetListAsync(int page, int itemsPerPage = 15);

        Task<IEnumerable<LoanDto>> GetCurrentListAsync();
    }
}
