using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services
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

        public async Task<IndexNewsViewModel> GetById(int id)
        {
            IndexNewsViewModel result = null;
            if (id > 0)
            {
                var newsItem = await _newsItemsRepository.GetById(id);
              //  result = Mapper.Map<IndexNewsViewModel>(_unitOfWork.NewsItemRepository.GetById(id));
                newsItem.Comments = newsItem.Comments.Where(x => !x.ParentId.HasValue).ToList();
                result = Mapper.Map<IndexNewsViewModel>(newsItem);
            }
            //throw new NotImplementedException();
            return result;
        }

        public void Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<CreateEditNewsViewModel> GetCreateEditViewModel(int? id)
        {
            CreateEditNewsViewModel viewModel;
            if (id.HasValue && id != 0)
            {
                var newsItem = await _unitOfWork.NewsItemRepository.GetById(id.Value);
                viewModel = Mapper.Map<CreateEditNewsViewModel>(newsItem);
            }
            else
            {
                viewModel = Mapper.Map<CreateEditNewsViewModel>(new NewsItem());
            }
            viewModel.NewsCategories = await _newsCategoryService.GetNewsCategories();

            return viewModel;
        }

        public void Delete(NewsItem newsItem)
        {
            throw new System.NotImplementedException();
        }

        public async Task<int> Edit(CreateEditNewsViewModel model)
        {
            var newsItem = Mapper.Map<NewsItem>(model);
            newsItem.LastModified = DateTime.Now;
            _unitOfWork.NewsItemRepository.Update(newsItem);
            await _unitOfWork.SaveAsync();
            return newsItem.Id;
        }

        public async Task<int> Create(CreateEditNewsViewModel model, int userId)
        {
            var newsItem = Mapper.Map<NewsItem>(model);
            newsItem.AdditionTime = DateTime.Now;
            newsItem.LastModified = DateTime.Now;
            newsItem.AuthorId = userId;
            _unitOfWork.NewsItemRepository.Add(newsItem);
            await _unitOfWork.SaveAsync();
            // var result = await _unitOfWork.NewsItemRepository.Get(x => x.AdditionTime == newsItem.AdditionTime);

            return newsItem.Id;
        }

        public async Task<IEnumerable<IndexMiniNewsVM>> GetAll()
        {
            // todo pageable 

            //throw new NotImplementedException();

            var news = await _unitOfWork.NewsItemRepository.Get();
            return news.Select(Mapper.Map<IndexMiniNewsVM>).ToList();
        }
    }
}
