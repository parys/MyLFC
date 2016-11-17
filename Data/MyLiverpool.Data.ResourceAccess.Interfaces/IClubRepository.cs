using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IClubRepository: ICrudRepository<Club>
    {
        Task<Club> GetByEnglishName(string name);

        Task<IEnumerable<Club>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Club, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Club, object>> orderBy = null);
    }
}
