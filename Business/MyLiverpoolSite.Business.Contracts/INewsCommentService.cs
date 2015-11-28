using System.Threading.Tasks;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface INewsCommentService
    {
        Task<int> AddCommentAsync(string message, int newsId, int? parentId, int userId);

        Task<bool> EditCommentAsync(int commentId, string message, string answer);

        Task<bool> DeleteAsync(int id);
    }
}
