using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
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
     //   IGenericRepository<BlogItem> BlogItemRepository { get; }
        IGenericRepository<Material> MaterialRepository { get; }
     //   IGenericRepository<BlogCategory> BlogCategoryRepository { get; }
        IGenericRepository<MaterialCategory> MaterialCategoryRepository { get; }
      //  IGenericRepository<BlogComment> BlogCommentRepository { get; }
        IGenericRepository<MaterialComment> MaterialCommentRepository { get; }
        IGenericRepository<ForumSection> ForumSectionRepository { get; }
        IGenericRepository<ForumTheme> ForumThemeRepository { get; }
        IGenericRepository<ForumSubsection> ForumSubsectionRepository { get; }
        IGenericRepository<ForumMessage> ForumMessageRepository { get; }
        IGenericRepository<UserClaim> UserClaimRepository { get; }
    //    IGenericRepository<UserLogin> UserLoginRepository { get; }
        IGenericRepository<Request> RequestRepository { get; }
        IGenericRepository<Role> RoleRepository { get; }
        IGenericRepository<RoleGroup> RoleGroupRepository { get; }
        IGenericRepository<PrivateMessage> PrivateMessageRepository { get; }
        //IGenericRepository<RoleClaim> RoleClaimRepository { get; }


        UserManager<User, int> UserManager { get; set; }
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
