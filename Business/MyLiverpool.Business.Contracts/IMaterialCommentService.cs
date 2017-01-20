using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialCommentService
    {
        Task<bool> DeleteAsync(int id);

        Task<MaterialCommentDto> AddAsync(MaterialCommentDto model, MaterialType materialType);

        Task<bool> UpdateAsync(MaterialCommentDto model);
        
        Task<PageableData<MaterialCommentDto>> GetListAsync(int page, bool onlyUnverified);

        Task<PageableData<MaterialCommentDto>> GetListByMaterialIdAsync(int materialId, int page);

        Task<bool> VerifyAsync(int id);
    }
}
