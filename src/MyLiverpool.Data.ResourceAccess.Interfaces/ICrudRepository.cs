using System.Threading.Tasks;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface ICrudRepository<TEntity>
    {
        /// <summary>
        /// Returns element by id
        /// </summary>
        Task<TEntity> GetByIdAsync(int id);

        /// <summary>
        /// Adds object to repository.
        /// </summary>
        Task<TEntity> AddAsync(TEntity entity);
        
        /// <summary>
        /// Updates object in repository.
        /// </summary>
        Task UpdateAsync(TEntity entity);
        
    }
}