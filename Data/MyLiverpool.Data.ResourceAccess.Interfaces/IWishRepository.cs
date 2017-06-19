using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IWishRepository : ICrudRepository<Wish>
    {
        Task<ICollection<Wish>> GetOrderedByAsync(int page, int itemPerPage = 15,
            Expression<Func<Wish, bool>> filter = null, SortOrder order = SortOrder.Ascending,
            Expression<Func<Wish, object>> orderBy = null);

        Task<Wish> UpdateAsync(Wish wish); //todo shoud be moded to interface
    }
}
