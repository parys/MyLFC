using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
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

        UserManager<User> UserManager { get; set; }
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
