using System.Threading.Tasks;

namespace MyLiverpool.Business.Contracts
{
    public interface IEntityService<T>
    {
        Task<T> CreateAsync(T dto);

        Task<T> UpdateAsync(T dto);

        Task<bool> DeleteAsync(int id);

        Task<T> GetByIdAsync(int id);
    }
}
