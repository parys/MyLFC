using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialCategoryService
    {
        Task<ICollection<MaterialCategoryDto>> GetListAsync(MaterialType materialType);

        Task<MaterialCategoryDto> GetAsync(int id);

        Task<MaterialCategoryDto> CreateAsync(MaterialCategoryDto dto);

        Task<MaterialCategoryDto> UpdateAsync(MaterialCategoryDto dto);

        Task<bool> DeleteAsync(int id);
    }
}
