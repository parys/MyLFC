using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IStadiumRepository : ICrudRepository<Stadium>
    {
        Task UpdateAsync(Stadium stadium); //todo can be moved to IcrudRepo

        Task<IEnumerable<Stadium>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Stadium, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Stadium, object>> orderBy = null);

        Task<IEnumerable<Stadium>> GetListByNameAsync(string typed);

        //bug temporary
        Task<IEnumerable<Stadium>> GetListAsync();
    }
}
