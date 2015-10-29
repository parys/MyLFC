using System;
using System.Collections.Generic;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services
{
    public class NewsCategoryService : INewsCategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public NewsCategoryService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public IEnumerable<NewsCategory> GetNewsCategories()
        {
            throw new NotImplementedException();
           //todo return _unitOfWork.NewsCategoryRepository.Get();
        }
    }
}
