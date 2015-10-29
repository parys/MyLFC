using System.Collections.Generic;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface INewsCategoryService
    {
        IEnumerable<NewsCategory> GetNewsCategories();
    }
}
