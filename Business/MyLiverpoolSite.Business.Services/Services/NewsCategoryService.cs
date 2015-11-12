using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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

        public async Task<ICollection<NewsCategory>> GetCategories()
        {
           return await _unitOfWork.NewsCategoryRepository.Get();
        }
    }
}
