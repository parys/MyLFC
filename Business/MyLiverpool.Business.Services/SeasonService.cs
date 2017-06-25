using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class SeasonService : ISeasonService
    {
        private readonly IMapper _mapper;
        private readonly ISeasonRepository _seasonRepository;
        private readonly IMatchService _matchService;

        public SeasonService(IMapper mapper, ISeasonRepository seasonRepository, IMatchService matchService)
        {
            _mapper = mapper;
            _seasonRepository = seasonRepository;
            _matchService = matchService;
        }

        public async Task<SeasonDto> CreateAsync(SeasonDto dto)
        {
            var model = _mapper.Map<Season>(dto);
            var result = await _seasonRepository.AddAsync(model);
            await _seasonRepository.SaveChangesAsync();
            return _mapper.Map<SeasonDto>(result);
        }

        public async Task<SeasonDto> UpdateAsync(SeasonDto dto)
        {
            var model = await _seasonRepository.GetByIdAsync(dto.Id);
            model.StartSeasonYear = dto.StartSeasonYear;
            _seasonRepository.Update(model);
            await _seasonRepository.SaveChangesAsync();
            var result = _mapper.Map<SeasonDto>(model);
            return result;
        }

        public async Task<bool> DeleteAsync(int id)
        {
          //  var model = await _seasonRepository.GetByIdAsync(id); /todo add loading clubs or getting club count
         //   if (model.Matches.Count > 0)
            {
          //      return false;
            }
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
            var seasons = await _seasonRepository.GetListAsync();
            var dtos = _mapper.Map<ICollection<SeasonDto>>(seasons);
            return dtos;
        }

        public async Task<SeasonDto> GetByIdWithMatchesAsync(int id)
        {
            Season season;
            if (id == 0)
            {
                season = await _seasonRepository.GetLatestSeason();
            }
            else
            {
                season = await _seasonRepository.GetByIdAsync(id);
            }
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
            return clubs.Select(x => new KeyValuePair<int, string>(x.Id, x.StartSeasonYear.ToString()));
        }
    }
}
