using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IMatchPersonRepository : ICrudRepository<MatchPerson>
    {
        Task<MatchPerson> GetByComplexIdAsync(int matchId, int personId);

        Task<IEnumerable<MatchPerson>> GetListAsync(
            Expression<Func<MatchPerson, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<MatchPerson, object>> orderBy = null);

        Task DeleteAsync(int matchId, int personId);
    }
}
