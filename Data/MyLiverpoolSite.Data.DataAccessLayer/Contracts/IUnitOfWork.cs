using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer.Contracts
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
        IGenericRepository<Material> MaterialRepository { get; }
        IGenericRepository<MaterialCategory> MaterialCategoryRepository { get; }
        IGenericRepository<MaterialComment> MaterialCommentRepository { get; }
        IGenericRepository<ForumSection> ForumSectionRepository { get; }
        IGenericRepository<ForumTheme> ForumThemeRepository { get; }
        IGenericRepository<ForumSubsection> ForumSubsectionRepository { get; }
        IGenericRepository<ForumMessage> ForumMessageRepository { get; }
        IGenericRepository<UserClaim> UserClaimRepository { get; }
    //    IGenericRepository<UserLogin> UserLoginRepository { get; }
        IGenericRepository<Wish> WishRepository { get; }
        IGenericRepository<Role> RoleRepository { get; }
        IGenericRepository<RoleGroup> RoleGroupRepository { get; }
        IGenericRepository<PrivateMessage> PrivateMessageRepository { get; }
        
        IGenericRepository<Club> ClubRepository { get; }


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
