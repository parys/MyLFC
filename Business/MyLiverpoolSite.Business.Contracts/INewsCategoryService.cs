using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface INewsCategoryService
    {
        Task<IEnumerable<NewsCategory>> GetNewsCategories();
    }
}
