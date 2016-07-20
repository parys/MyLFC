using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IMaterialService
    {
        Task<IndexNewsViewModel> GetByIdAsync(int id, MaterialType materialType);

        Task<int> CreateVmAsync(CreateEditNewsViewModel model, int userId, MaterialType materialType);

        Task<int> EditAsync(CreateEditNewsViewModel newsItem, MaterialType materialType);

        void Delete(Material newsItem, MaterialType materialType);

        Task<bool> DeleteAsync(int id, int userId, MaterialType materialType);


        Task<PageableData<IndexMiniNewsVM>> GetAllAsync(int page, int? categoryId, MaterialType materialType);

        Task<bool> ActivateAsync(int id, MaterialType materialType);

        Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(int page, int? categoryId, string userName, MaterialType materialType);

        Task<MaterialDto> GetDtoAsync(int id, MaterialType materialType);

        Task<bool> CreateAsync(MaterialDto dto, int userId, MaterialType materialType);

        Task<bool> EditAsync(MaterialDto dto, int userId, MaterialType materialType);

        Task<bool> AddViewAsync( int id, MaterialType materialType);
    }
}
