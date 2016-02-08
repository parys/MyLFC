using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IMaterialCategoryService
    {
        Task<ICollection<MaterialCategory>> GetCategoriesAsync(MaterialType materialType);

        Task<ICollection<MaterialCategoryDto>> GetCategoriesDtoAsync(MaterialType materialType);
    }
}
