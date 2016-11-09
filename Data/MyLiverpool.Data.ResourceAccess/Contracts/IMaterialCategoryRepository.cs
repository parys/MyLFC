using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Contracts
{
    public interface IMaterialCategoryRepository: ICrudRepository<MaterialCategory>
    {
        Task<ICollection<MaterialCategory>> GetAsync(
            Expression<Func<MaterialCategory, bool>> filter = null,
            params Expression<Func<MaterialCategory, object>>[] includeProperties);
    }
}
