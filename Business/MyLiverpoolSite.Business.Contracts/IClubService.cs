using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IClubService : IEntityService<ClubDto>
    {
        Task<string> GetNameAsync(int clubId);

        Task UpdateLogoAsync(int clubId, string relativePath);

        Task<PageableData<ClubDto>> GetListAsync(int page);
    }
}
