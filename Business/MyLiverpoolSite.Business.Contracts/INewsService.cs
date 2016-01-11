using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Business.ViewModels.NewsCategories;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface INewsService
    {
        /// <summary>
        /// Returns newsItem by id.
        /// </summary>
        /// <param name="id">newsItem id</param>
        /// <returns>Found newsItem or null.</returns>
        Task<IndexNewsViewModel> GetByIdAsync(int id);

        Task<int> CreateVmAsync(CreateEditNewsViewModel model, int userId);

        Task<int> EditAsync(CreateEditNewsViewModel newsItem);

        void Delete(NewsItem newsItem);

        Task<bool> DeleteAsync(int id, int userId);

        Task<CreateEditNewsViewModel> GetCreateEditViewModelAsync(int? id);

        Task<PageableData<IndexMiniNewsVM>> GetAllAsync(int page, int? categoryId);

        Task<bool> ActivateAsync(int id);

       // Task<IEnumerable<IndexNewsCategoryVM>> GetCategoriesAsync();

        Task<PageableData<NewsMiniDto>> GetDtoAllAsync(int page, int? categoryId);

        Task<NewsItemDto> GetDtoAsync(int id);

        Task<bool> CreateAsync(NewsItemDto dto, int userId);
    }
}
