using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IMatchEventRepository : ICrudRepository<MatchEvent>
    {
        Task<IEnumerable<MatchEvent>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<MatchEvent, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<MatchEvent, object>> orderBy = null);

        Task<IEnumerable<MatchEvent>> GetListAsync(
            Expression<Func<MatchEvent, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<MatchEvent, object>> orderBy = null);
    }
}
