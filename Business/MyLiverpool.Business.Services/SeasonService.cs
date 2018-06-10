using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class SeasonService : ISeasonService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Season> _seasonRepository;
        private readonly IHelperService _helperService;
        private readonly IMatchService _matchService;

        public SeasonService(IMapper mapper, IGenericRepository<Season> seasonRepository, IHelperService helperService, IMatchService matchService)
        {
            _mapper = mapper;
            _seasonRepository = seasonRepository;
            _helperService = helperService;
            _matchService = matchService;
        }

        public async Task<SeasonDto> CreateAsync(SeasonDto dto)
        {
            var model = _mapper.Map<Season>(dto);
            var result = await _seasonRepository.CreateAsync(model);
            return _mapper.Map<SeasonDto>(result);
        }

        public async Task<SeasonDto> UpdateAsync(SeasonDto dto)
        {
            var model = await _seasonRepository.GetByIdAsync(dto.Id);
            model.StartSeasonYear = dto.StartSeasonYear;
            await _seasonRepository.UpdateAsync(model);
            var result = _mapper.Map<SeasonDto>(model);
            return result;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _seasonRepository.DeleteAsync(id);
            return true;
        }

        public async Task<SeasonDto> GetByIdAsync(int id)
        {
            var model = await _seasonRepository.GetByIdAsync(id);
            var dto = _mapper.Map<SeasonDto>(model);
            return dto;
        }

        public async Task<ICollection<SeasonDto>> GetListAsync()
        {
            var seasons = await _seasonRepository.GetListAsync(null, SortOrder.Descending, x => x.StartSeasonYear);
            var dtos = _mapper.Map<ICollection<SeasonDto>>(seasons);
            return dtos;
        }

        public async Task<SeasonDto> GetByIdWithMatchesAsync(int id)
        {
            if (id == 0)
            {
                id = await GetCurrentSeasonIdAsync();
            }
            var season = await _seasonRepository.GetByIdAsync(id, true);//todo, x => x.Matches);
            
            if (season == null)
            {
                return null;
            }
            var seasonDto = _mapper.Map<SeasonDto>(season);
            seasonDto.Matches = await _matchService.GetListForSeasonAsync(season.Id);
            return seasonDto;
        }

        public async Task<IEnumerable<KeyValuePair<int, string>>> GetSeasonsByYearAsync(string typed)
        {
            Expression<Func<Season, bool>> filter = x => x.StartSeasonYear.ToString().Contains(typed);
            
            var clubs = await _seasonRepository.GetListAsync(filter);
            return clubs.Select(x => new KeyValuePair<int, string>(x.Id, $"{x.StartSeasonYear.ToString()}-{x.EndSeasonYear.ToString()}"));
        }

        public async Task<SeasonDto> GetByStartYearAsync(int startSeason)
        {
            var season = await _seasonRepository.GetSingleByFilterAsync(x => x.StartSeasonYear == startSeason);
            return season != null ? _mapper.Map<SeasonDto>(season) : null;
        }

        public async Task<int> GetCurrentSeasonIdAsync()
        {
            return Int32.Parse(await _helperService.GetAsync(HelperEntityType.CurrentSeason));
        }

        public async Task SetCurrentSeasonAsync(int currentSeasonId)
        {
            await _helperService.UpdateAsync(HelperEntityType.CurrentSeason, currentSeasonId.ToString());
        }
    }
}
