using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Contracts
{
    public interface IMaterialCommentService
    {
        Task<int> AddCommentAsync(string message, int newsId, int? parentId, int userId, MaterialType materialType);

        Task<bool> EditCommentAsync(int commentId, string message, string answer, MaterialType materialType);

        Task<bool> DeleteAsync(int id, MaterialType materialType);

        Task<MaterialCommentDto> AddAsync(MaterialCommentEditingDto model, MaterialType materialType);

        Task<bool> EditAsync(MaterialCommentEditingDto model, MaterialType materialType);

        Task<PageableData<MaterialCommentDto>> GetListAsync(int page, bool onlyUnverified);

        Task<bool> VerifyAsync(int id);
    }
}
