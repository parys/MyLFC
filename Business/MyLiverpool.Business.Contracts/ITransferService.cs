using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface ITransferService : IEntityService<TransferDto>
    {
        Task<PageableData<TransferDto>> GetListAsync(int page, int itemsPerPage = 15);

        Task<IEnumerable<TransferDto>> GetCurrentListAsync();
    }
}
