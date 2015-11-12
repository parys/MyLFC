using System.Threading.Tasks;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IBlogCommentService
    {
        Task<int> AddParentComment(string comment, int blogId, int? parentId, int userId);
    }
}