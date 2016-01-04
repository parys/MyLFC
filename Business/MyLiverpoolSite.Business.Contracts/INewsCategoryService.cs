using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface INewsCategoryService
    {
        Task<ICollection<NewsCategory>> GetCategoriesAsync();

        Task<ICollection<NewsCategoryDto>> GetCategoriesDtoAsync();
    }
}
