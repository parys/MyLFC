using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IBlogCategoryService
    {
        Task<ICollection<BlogCategory>> GetCategories();
    }
}