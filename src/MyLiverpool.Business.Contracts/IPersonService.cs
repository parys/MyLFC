using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface IPersonService
    {
    //    Task SetBestPlayerAsync(int personId);
        Task<SquadListDto> GetSquadListAsync(PersonType type);
    }
}
