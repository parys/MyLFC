using System.Threading.Tasks;
using MyLiverpool.Business.Dto.Seasons;

namespace MyLiverpool.Business.Contracts
{
    public interface ISeasonService
    {
        Task<SeasonDto> GetByIdWithMatchesAsync(int id);

        //todo could reduce size of dto
        Task<SeasonCalendarDto> GetCalendarByIdWithMatchesAsync(int id);
        
        Task<int> GetCurrentSeasonIdAsync();

        Task SetCurrentSeasonAsync(int currentSeasonId);
    }
}
