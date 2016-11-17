using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IPmRepository : ICrudRepository<PrivateMessage>
    {
        Task<IEnumerable<PrivateMessage>> GetAsync(Expression<Func<PrivateMessage, bool>> filter = null);
    }
}
