using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IInjuryRepository :  ICrudRepository<Injury>
    {
        Task<IEnumerable<Injury>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Injury, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Injury, object>> orderBy = null);
    }
}
