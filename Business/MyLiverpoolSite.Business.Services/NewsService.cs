using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Common.Utilities;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services
{
    public class NewsService : INewsService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly INewsCategoryService _newsCategoryService;

        public NewsService(IUnitOfWork unitOfWork, INewsCategoryService newsCategoryService)
        {
            _unitOfWork = unitOfWork;
            _newsCategoryService = newsCategoryService;
        }

        public NewsItem GetById(int id)
        {
            //throw new NotImplementedException();
            return id > 0 ? _unitOfWork.NewsItemRepository.GetById(id) : null;
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
                viewModel = Mapper.Map<NewsItem, CreateEditNewsViewModel>(newsItem);
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

        public IEnumerable<NewsItem> GetAll()
        {
            // todo pageable 
            //throw new NotImplementedException();
            return _unitOfWork.NewsItemRepository.Get().Take(2);
        }
    }
}
