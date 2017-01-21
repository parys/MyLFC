using MyLiverpool.Data.Entities;
using System.Threading.Tasks;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IHelperEntityRepository
    {
        Task<HelpEntity> GetByTypeAsync(HelperEntityType type);

        Task<HelpEntity> UpdateAndSaveAsync(HelpEntity entity);
    }
}