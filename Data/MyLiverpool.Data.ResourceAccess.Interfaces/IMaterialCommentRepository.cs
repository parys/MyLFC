using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IMaterialCommentRepository : ICrudRepository<MaterialComment>
    {
        Task<ICollection<MaterialComment>> GetOrderedByAsync(int page, int itemPerPage = 15,
    Expression<Func<MaterialComment, bool>> filter = null, SortOrder order = SortOrder.Ascending,
    Expression<Func<MaterialComment, object>> orderBy = null);
    }
}
