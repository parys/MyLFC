using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Contracts
{
    public interface IMatchRepository: ICrudRepository<Match>
    {
        Task<IEnumerable<Match>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Match, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Match, object>> orderBy = null);
    }
}
