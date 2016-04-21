using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IMaterialCategoryService
    {
        Task<ICollection<MaterialCategoryDto>> GetListAsync(MaterialType materialType);

        Task<MaterialCategoryDto> GetAsync(int id, MaterialType materialType);

        Task<MaterialCategoryDto> CreateAsync(MaterialCategoryDto dto);

        Task<MaterialCategoryDto> UpdateAsync(MaterialCategoryDto dto);

        Task<bool> DeleteAsync(int id);
    }
}
