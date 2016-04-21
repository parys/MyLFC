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
        private readonly IMapper _mapper;

        public MaterialCategoryService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ICollection<MaterialCategoryDto>> GetListAsync(MaterialType materialType)
        {
            var categories = await _unitOfWork.MaterialCategoryRepository.GetAsync(x => x.MaterialType == materialType);
            var result = _mapper.Map<ICollection<MaterialCategoryDto>>(categories);
            return result;
        }

        public async Task<MaterialCategoryDto> GetAsync(int id, MaterialType materialType)
        {
            var result = await _unitOfWork.MaterialCategoryRepository.GetByIdAsync(id);
            if (result.MaterialType != materialType)
            {
                return null;
            }
            return _mapper.Map<MaterialCategoryDto>(result);
        }

        public async Task<MaterialCategoryDto> CreateAsync(MaterialCategoryDto dto)
        {
            throw new System.NotImplementedException();
        }

        public async Task<MaterialCategoryDto> UpdateAsync(MaterialCategoryDto dto)
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var category = await _unitOfWork.MaterialCategoryRepository.GetByIdAsync(id);
            if (category.Materials.Count > 0)
            {
                return false;
            }
            await _unitOfWork.MaterialCategoryRepository.DeleteAsync(id);
            await _unitOfWork.SaveAsync();
            return true;
        }
    }
}
