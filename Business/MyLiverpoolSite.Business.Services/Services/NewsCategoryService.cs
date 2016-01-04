using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class NewsCategoryService : INewsCategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public NewsCategoryService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<ICollection<NewsCategory>> GetCategoriesAsync()
        {
           return await _unitOfWork.NewsCategoryRepository.GetAsync();
        }

        public async Task<ICollection<NewsCategoryDto>> GetCategoriesDtoAsync()
        {
            var categories = await _unitOfWork.NewsCategoryRepository.GetAsync();
            var result = Mapper.Map<ICollection<NewsCategoryDto>>(categories);
            return result;
        }
    }
}
