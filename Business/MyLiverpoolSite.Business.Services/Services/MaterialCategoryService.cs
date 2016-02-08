using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class MaterialCategoryService : IMaterialCategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public MaterialCategoryService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<ICollection<MaterialCategory>> GetCategoriesAsync(MaterialType materialType)
        {
           return await _unitOfWork.MaterialCategoryRepository.GetAsync(x => x.MaterialType == materialType);
        }

        public async Task<ICollection<MaterialCategoryDto>> GetCategoriesDtoAsync(MaterialType materialType)
        {
            var categories = await _unitOfWork.MaterialCategoryRepository.GetAsync(x => x.MaterialType == materialType);
            var result = Mapper.Map<ICollection<MaterialCategoryDto>>(categories);
            return result;
        }
    }
}
