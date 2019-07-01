using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Seasons;
using MyLiverpool.Data.Common;
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

        public async Task<SeasonDto> GetByIdWithMatchesAsync(int id)
        {
            if (id == 0)
            {
                id = await GetCurrentSeasonIdAsync();
            }
            var season = await _seasonRepository.GetFirstByPredicateAsync(x => x.Id == id, true);
            
            if (season == null)
            {
                return null;
            }
            var seasonDto = _mapper.Map<SeasonDto>(season);
            seasonDto.Matches = await _matchService.GetListForSeasonAsync(season.Id);
            return seasonDto;
        }

        public async Task<SeasonCalendarDto> GetCalendarByIdWithMatchesAsync(int id)
        {
            if (id == 0)
            {
                id = await GetCurrentSeasonIdAsync();
            }
            var season = await _seasonRepository.GetFirstByPredicateAsync(x => x.Id == id, true, x => x.Include(s => s.Matches));

            if (season == null)
            {
                return null;
            }
            var seasonDto = _mapper.Map<SeasonCalendarDto>(season);
            seasonDto.Months = GetMonthsWithMatches(await _matchService.GetListForSeasonAsync(season.Id));
            return seasonDto;
        }
        
        //todo rewrite to cached prop maybe init on start
        public async Task<int> GetCurrentSeasonIdAsync()
        {
            return Int32.Parse(await _helperService.GetValueAsync(HelperEntityType.CurrentSeason) ?? DateTime.Today.Year.ToString());
        }

        public async Task SetCurrentSeasonAsync(int currentSeasonId)
        {
            await _helperService.CreateOrUpdateAsync(HelperEntityType.CurrentSeason, currentSeasonId.ToString());
        }

        private List<SeasonMonthDto> GetMonthsWithMatches(IEnumerable<MatchDto> matches)
        {
            return new List<SeasonMonthDto>
            {
                GetMonth("Июль", 7, matches),
                GetMonth("Август", 8, matches),
                GetMonth("Сентябрь", 9, matches),
                GetMonth("Октябрь", 10, matches),
                GetMonth("Ноябрь", 11, matches),
                GetMonth("Декабрь", 12, matches),
                GetMonth("Январь", 1, matches),
                GetMonth("Февраль", 2, matches),
                GetMonth("Март", 3, matches),
                GetMonth("Апрель", 4, matches),
                GetMonth("Май", 5, matches),
                GetMonth("Июнь", 6, matches)
            };
        }

        private SeasonMonthDto GetMonth(string name, int monthCount, IEnumerable<MatchDto> matches)
        {
            var matchesForMonth = matches.Where(x => x.DateTime.Month == monthCount);
            return new SeasonMonthDto
            {
                Name = name,
                Matches = matchesForMonth,
                Collapsed = matchesForMonth.All(x => x.DateTime < DateTimeOffset.Now)
            };
        }
    }
}
