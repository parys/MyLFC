using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface ITransferRepository : ICrudRepository<Transfer>
    {
        Task<IEnumerable<Transfer>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Transfer, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Transfer, object>> orderBy = null);
    }
}
