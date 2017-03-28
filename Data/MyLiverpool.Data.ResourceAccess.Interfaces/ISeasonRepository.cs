using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface ISeasonRepository : ICrudRepository<Season>
    {
        Task<Season> GetLatestSeason();
    }
}
