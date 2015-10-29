using System.Collections.Generic;
using MyLiverpoolSite.Business.ViewModels.News;
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
        NewsItem GetById(int id);

        int Create(NewsItem newsItem);

        int Edit(NewsItem newsItem);

        void Delete(NewsItem newsItem);

        void Delete(int id);

        CreateEditNewsViewModel GetCreateEditViewModel(int? id);

        IEnumerable<NewsItem> GetAll();
    }
}
