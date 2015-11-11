using System.Threading.Tasks;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    /// <summary>
    /// Maintains a list of repositories affected by a business transaction and coordinates 
    /// the writing out of changes and the resolution of concurrency problems.
    /// </summary>
    public interface IUnitOfWork
    {
        /// <summary>
        /// Provides access to user repository.
        /// </summary>
        IGenericRepository<User> UserRepository { get; }
        IGenericRepository<BlogItem> BlogItemRepository { get; }
        IGenericRepository<NewsItem> NewsItemRepository { get; }
        IGenericRepository<BlogCategory> BlogCategoryRepository { get; }
        IGenericRepository<NewsCategory> NewsCategoryRepository { get; }
        IGenericRepository<BlogComment> BlogCommentRepository { get; }
        IGenericRepository<NewsComment> NewsCommentRepository { get; }
        IGenericRepository<ForumSection> ForumSectionRepository { get; }
        IGenericRepository<ForumTheme> ForumThemeRepository { get; }
        IGenericRepository<ForumSubsection> ForumSubsectionRepository { get; }
        IGenericRepository<ForumMessage> ForumMessageRepository { get; }
        IGenericRepository<UserClaim> UserClaimRepository { get; }
    //    IGenericRepository<UserLogin> UserLoginRepository { get; }
     //   IGenericRepository<UserRole> UserRoleRepository { get; }
        IGenericRepository<Role> RoleRepository { get; }
        //IGenericRepository<RoleClaim> RoleClaimRepository { get; }

        /// <summary>
        /// Saves changes to shared data source.
        /// </summary>
        void Save();

        Task SaveAsync();

        /// <summary>
        /// The release of resources.
        /// </summary>
        void Dispose();
    }
}
