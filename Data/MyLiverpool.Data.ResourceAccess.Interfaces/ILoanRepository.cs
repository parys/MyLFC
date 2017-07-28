using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface ILoanRepository : ICrudRepository<Loan>
    {
        Task<IEnumerable<Loan>> GetListAsync(int page, int itemPerPage = 15,
            Expression<Func<Loan, bool>> filter = null,
            SortOrder order = SortOrder.Ascending, Expression<Func<Loan, object>> orderBy = null);
    }
}
