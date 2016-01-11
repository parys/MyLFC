using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Business.ViewModels.NewsCategories;
using MyLiverpoolSite.Common.Utilities;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class NewsService : INewsService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly INewsCategoryService _newsCategoryService;
        private readonly INewsItemsRepository _newsItemsRepository;

        public NewsService(IUnitOfWork unitOfWork, INewsCategoryService newsCategoryService, INewsItemsRepository newsItemsRepository)
        {
            _unitOfWork = unitOfWork;
            _newsCategoryService = newsCategoryService;
            _newsItemsRepository = newsItemsRepository;
        }

        #region VM
        public async Task<IndexNewsViewModel> GetByIdAsync(int id)
        {
            IndexNewsViewModel result = null;
            if (id > 0)
            {
                var newsItem = await _newsItemsRepository.GetById(id);
                //  result = Mapper.Map<IndexNewsViewModel>(_unitOfWork.NewsItemRepository.GetById(id));
                newsItem.Comments = newsItem.Comments.Where(x => !x.ParentId.HasValue).ToList();
                result = Mapper.Map<IndexNewsViewModel>(newsItem);
            }
            return result;
        }

        public async Task<CreateEditNewsViewModel> GetCreateEditViewModelAsync(int? id)
        {
            CreateEditNewsViewModel viewModel;
            if (id.HasValue && id != 0)
            {
                var newsItem = await _unitOfWork.NewsItemRepository.GetByIdAsync(id.Value);
                viewModel = Mapper.Map<CreateEditNewsViewModel>(newsItem);
            }
            else
            {
                viewModel = Mapper.Map<CreateEditNewsViewModel>(new NewsItem());
            }
            viewModel.NewsCategories = await _newsCategoryService.GetCategoriesAsync();

            return viewModel;
        }

        public void Delete(NewsItem newsItem)
        {
            throw new System.NotImplementedException();
        }

        public async Task<int> EditAsync(CreateEditNewsViewModel model)
        {
            var newsItem = Mapper.Map<NewsItem>(model);
            newsItem.LastModified = DateTime.Now;
            _unitOfWork.NewsItemRepository.Update(newsItem);
            await _unitOfWork.SaveAsync();
            return newsItem.Id;
        }

        public async Task<int> CreateVmAsync(CreateEditNewsViewModel model, int userId)
        {
            var newsItem = Mapper.Map<NewsItem>(model);
            newsItem.AdditionTime = DateTime.Now;
            newsItem.LastModified = DateTime.Now;
            newsItem.AuthorId = userId;
            _unitOfWork.NewsItemRepository.Add(newsItem);
            await _unitOfWork.SaveAsync();

            return newsItem.Id;
        }

        public async Task<PageableData<IndexMiniNewsVM>> GetAllAsync(int page, int? categoryId)
        {
            // itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<NewsItem, bool>> filter = x => !x.OnTop;
            Expression<Func<NewsItem, bool>> filterForCount = null;
            ICollection<NewsItem> topNews = null;
            if (categoryId.HasValue)
            {
                filter = x => x.NewsCategoryId == categoryId.Value && !x.OnTop;
                filterForCount = x => x.NewsCategoryId == categoryId.Value;
                topNews = await _unitOfWork.NewsItemRepository.GetAsync(x => x.OnTop && x.NewsCategoryId == categoryId.Value);
            }
            else
            {
                topNews = await _unitOfWork.NewsItemRepository.GetAsync(x => x.OnTop);
            }
             
           // if (page == GlobalConstants.FirstPage)
           // {
                var itemPerPage = GlobalConstants.NewsPerPage - topNews.Count;
           // }
            var news = await _unitOfWork.NewsItemRepository.GetAsync(page, filter: filter, itemPerPage: itemPerPage);
            var newsForView = (page == GlobalConstants.FirstPage) ? topNews.Concat(news) : news;
            var newsVM = Mapper.Map<IEnumerable<IndexMiniNewsVM>>(newsForView);
            var allNewsCount = await _unitOfWork.NewsItemRepository.GetCountAsync(filterForCount);
            var result = new PageableData<IndexMiniNewsVM>(newsVM, page, allNewsCount);
            return result;
        }

        public async Task<IEnumerable<IndexNewsCategoryVM>> GetCategoriesAsync()
        {
            var categories = await _unitOfWork.NewsCategoryRepository.GetAsync();
            var categoriesVM = Mapper.Map<IEnumerable<IndexNewsCategoryVM>>(categories);

            return categoriesVM;
        }
        #endregion

        #region Dto 
        public async Task<PageableData<NewsMiniDto>> GetDtoAllAsync(int page, int? categoryId)
        {
            // itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<NewsItem, bool>> filter = x => !x.OnTop;
            Expression<Func<NewsItem, bool>> filterForCount = null;
            ICollection<NewsItem> topNews = null;
            if (categoryId.HasValue)
            {
                filter = x => x.NewsCategoryId == categoryId.Value && !x.OnTop;
                filterForCount = x => x.NewsCategoryId == categoryId.Value;
                topNews = await _unitOfWork.NewsItemRepository.GetAsync(x => x.OnTop && x.NewsCategoryId == categoryId.Value);
            }
            else
            {
                topNews = await _unitOfWork.NewsItemRepository.GetAsync(x => x.OnTop);
            }

            // if (page == GlobalConstants.FirstPage)
            // {
            var itemPerPage = GlobalConstants.NewsPerPage - topNews.Count > 0 ? GlobalConstants.NewsPerPage - topNews.Count : 0;
            // }
            var news = await _unitOfWork.NewsItemRepository.GetAsync(page, filter: filter, itemPerPage: itemPerPage);
            var newsForView = (page == GlobalConstants.FirstPage) ? topNews.Concat(news) : news;
            var newsVm = Mapper.Map<IEnumerable<NewsMiniDto>>(newsForView);
            var allNewsCount = await _unitOfWork.NewsItemRepository.GetCountAsync(filterForCount);
            var result = new PageableData<NewsMiniDto>(newsVm, page, allNewsCount);
            return result;
        }

        public async Task<NewsItemDto> GetDtoAsync(int id)
        {
            var newsItem = await _unitOfWork.NewsItemRepository.GetByIdAsync(id);
            if (newsItem == null)
            {
                return null;
            }
            //todo newsCounter
            var dto = Mapper.Map<NewsItemDto>(newsItem);
            return dto;
        }

        public async Task<bool> DeleteAsync(int id, int userId)
        {
            var newsItem = await _unitOfWork.NewsItemRepository.GetByIdAsync(id);
            var userRoles = await _unitOfWork.UserManager.GetRolesAsync(userId);
            if (!userRoles.Contains(RolesEnum.NewsFull.ToString()) && newsItem.AuthorId != userId)
            {
                return false;
            }
            try
            {
                var comments = newsItem.Comments.ToList();
                foreach (var comment in comments)
                {
                    await _unitOfWork.NewsCommentRepository.DeleteAsync(comment);
                }
                await _unitOfWork.NewsItemRepository.DeleteAsync(newsItem);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> ActivateAsync(int id)
        {
            var newsItem = await _unitOfWork.NewsItemRepository.GetByIdAsync(id);
            if (newsItem == null)
            {
                return false;
            }
            newsItem.Pending = false;
            _unitOfWork.NewsItemRepository.Update(newsItem);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<bool> CreateAsync(NewsItemDto model, int userId)
        {
            if (!model.AdditionTime.HasValue)
            {
                model.AdditionTime = DateTime.Now;
                model.AuthorId = userId;
            }
            var newsItem = Mapper.Map<NewsItem>(model);
            newsItem.LastModified = DateTime.Now;
            try
            {
                _unitOfWork.NewsItemRepository.Add(newsItem);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        } 

        #endregion
    }
}
