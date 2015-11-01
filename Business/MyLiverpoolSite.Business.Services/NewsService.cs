using System;
using System.Collections.Generic;
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
                result = Mapper.Map<IndexNewsViewModel>(newsItem);
            }
            //throw new NotImplementedException();
            return result;
        }

        public void Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public CreateEditNewsViewModel GetCreateEditViewModel(int? id)
        {
            CreateEditNewsViewModel viewModel = new CreateEditNewsViewModel();
            if (id.HasValue && id != 0)
            {
                var newsItem = GetById(id.Value);
                viewModel = Mapper.Map<CreateEditNewsViewModel>(newsItem);
                //DateTimeHelpers.ConvertUtcToLocalTime(viewModel.AdditionTime);
            }
            else
            {
              //  viewModel = new NewsItem();
            }
            viewModel.NewsCategories = _newsCategoryService.GetNewsCategories();

            return viewModel;
        }

        public void Delete(NewsItem newsItem)
        {
            throw new System.NotImplementedException();
        }

        public int Edit(NewsItem newsItem)
        {
            throw new NotImplementedException();
            //todo _unitOfWork.NewsItemRepository.Update(newsItem);
            //_unitOfWork.Save();
           // return newsItem.Id;
        }

        public int Create(NewsItem newsItem)
        {
            throw new NotImplementedException();
            //todo  _unitOfWork.NewsItemRepository.Add(newsItem);
           // _unitOfWork.Save();
          //  return newsItem.Id;
        }

        public IEnumerable<IndexNewsViewModel> GetAll()
        {
            // todo pageable 

            //throw new NotImplementedException();

            var result = new List<IndexNewsViewModel>();

            var news = _unitOfWork.NewsItemRepository.Get();
            foreach (var item in news)
            {
                var res = Mapper.Map<IndexNewsViewModel>(item);
                result.Add(res);
            }
            return result;
        }
    }
}
