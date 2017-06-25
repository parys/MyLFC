using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface ISeasonService : IEntityService<SeasonDto>
    {
        Task<ICollection<SeasonDto>> GetListAsync();

        Task<SeasonDto> GetByIdWithMatchesAsync(int id);

        Task<IEnumerable<KeyValuePair<int, string>>> GetSeasonsByYearAsync(string typed);
    }
}
