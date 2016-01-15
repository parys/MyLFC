using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface INewsCommentService
    {
        Task<int> AddCommentAsync(string message, int newsId, int? parentId, int userId);

        Task<bool> EditCommentAsync(int commentId, string message, string answer);

        Task<bool> DeleteAsync(int id);

        Task<int> AddAsync(NewsCommentEditingDto model);
    }
}
