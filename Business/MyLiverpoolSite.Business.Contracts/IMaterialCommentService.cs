using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IMaterialCommentService
    {
        Task<int> AddCommentAsync(string message, int newsId, int? parentId, int userId, MaterialType materialType);

        Task<bool> EditCommentAsync(int commentId, string message, string answer, MaterialType materialType);

        Task<bool> DeleteAsync(int id, MaterialType materialType);

        Task<MaterialCommentDto> AddAsync(NewsCommentEditingDto model, MaterialType materialType);

        Task<bool> EditAsync(NewsCommentEditingDto model, MaterialType materialType);
    }
}
