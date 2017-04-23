using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MaterialCategoryService : IMaterialCategoryService
    {
        private readonly IMaterialCategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public MaterialCategoryService(IMaterialCategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<ICollection<MaterialCategoryDto>> GetListAsync(MaterialType materialType)
        {
            var categories = await _categoryRepository.GetAsync(x => x.MaterialType == materialType);
            var result = _mapper.Map<ICollection<MaterialCategoryDto>>(categories);
            return result;
        }

        public async Task<MaterialCategoryDto> GetAsync(int id)
        {
            var result = await _categoryRepository.GetByIdAsync(id);
            return _mapper.Map<MaterialCategoryDto>(result);
        }

        public async Task<MaterialCategoryDto> CreateAsync(MaterialCategoryDto dto)
        {
            var model = _mapper.Map<MaterialCategory>(dto);
            model = await _categoryRepository.AddAsync(model);
            await _categoryRepository.SaveChangesAsync();
            var result = _mapper.Map<MaterialCategoryDto>(model);
            return result;
        }

        public async Task<MaterialCategoryDto> UpdateAsync(MaterialCategoryDto dto)
        {
            var model = await _categoryRepository.GetByIdAsync(dto.Id);
            model.Name = dto.Name;
            model.Description = dto.Description;
            _categoryRepository.Update(model);
            await _categoryRepository.SaveChangesAsync();
            var result = _mapper.Map<MaterialCategoryDto>(model);
            return result;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category.Materials.Count > 0)
            {
                return false;
            }
            await _categoryRepository.DeleteAsync(id);
            await _categoryRepository.SaveChangesAsync();
            return true;
        }
    }
}
