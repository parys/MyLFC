using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Contracts
{
    public interface IMaterialRepository
    {
        Task<IEnumerable<Material>> Get();

        Task<Material> GetById(int id);
    }
}
