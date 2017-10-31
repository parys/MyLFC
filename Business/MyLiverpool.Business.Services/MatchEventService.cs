using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchEventService : IMatchEventService
    {
        private readonly IGenericRepository<MatchEvent> _matchEventRepository;
        private readonly ISeasonService _seasonService;
        private readonly IMapper _mapper;

        public MatchEventService(IGenericRepository<MatchEvent> matchEventRepository, IMapper mapper, ISeasonService seasonService)
        {
            _matchEventRepository = matchEventRepository;
            _mapper = mapper;
            _seasonService = seasonService;
        }

        public async Task<MatchEventDto> CreateAsync(MatchEventDto dto)
        {
            var entity = _mapper.Map<MatchEvent>(dto);
            await _matchEventRepository.CreateAsync(entity);
            return _mapper.Map<MatchEventDto>(entity);
        }

        public async Task<MatchEventDto> UpdateAsync(MatchEventDto dto)
        {
            var entity = await _matchEventRepository.GetByIdAsync(dto.Id);
            if (entity != null)
            {
                entity.MatchId = dto.MatchId;
                entity.Minute = dto.Minute;
                entity.PersonId = dto.PersonId;
                entity.SeasonId = dto.SeasonId;
                entity.IsOur = dto.IsOur;
                entity.Type = dto.Type;
                entity.Person = null;
                entity.Season = null;
                entity.Match = null;
                await _matchEventRepository.UpdateAsync(entity);
                return _mapper.Map<MatchEventDto>(entity);
            }
            return null;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _matchEventRepository.DeleteAsync(id);
            return true;
        }

        public async Task<MatchEventDto> GetByIdAsync(int id)
        {
            var model = await _matchEventRepository.GetByIdAsync(id, true, x => x.Season, x => x.Person);
            return model != null ? _mapper.Map<MatchEventDto>(model) : null;
        }

        public async Task<IEnumerable<MatchEventDto>> GetListByMatchIdAsync(int matchId)
        {
            var events =
                await _matchEventRepository.GetListAsync(x => x.MatchId == matchId, SortOrder.Descending,
                    x => x.Minute, x => x.Person);
            return _mapper.Map<IEnumerable<MatchEventDto>>(events);
        }

        public async Task<IEnumerable<PersonStatisticDto>> GetStatistics(int seasonId)
        {
            if (seasonId == 0)
            {
                var season = await _seasonService.GetCurrentSeasonAsync();
                if (season == null)
                {
                    return null;
                }
                seasonId = season.Id;
            }
            var events = await _matchEventRepository.GetListAsync(
                x => x.Match.SeasonId == seasonId && x.Match.MatchType != MatchTypeEnum.PreSeason && x.Person.Type != PersonType.Rival,
                SortOrder.Unspecified,
                null, x => x.Person, x => x.Match);
            var persons = events.GroupBy(x => x.PersonId);

            return persons.Select(person => new PersonStatisticDto
                {
                    PersonId = person.Key,
                    PersonName = person.First().Person.RussianName,
                    Goals = Count(person.Where(x => x.Type == MatchEventType.Goal || x.Type == MatchEventType.GoalPenalty)),
                    Assists = Count(person.Where(x => x.Type == MatchEventType.Assist)),
                    Yellows = Count(person.Where(x => x.Type == MatchEventType.Yellow)),
                    Reds = Count(person.Where(x => x.Type == MatchEventType.Red))
                });
        }

        private StatisticsDto Count(IEnumerable<MatchEvent> events)
        {
            return new StatisticsDto
            {
                Cl = events.Count(x => x.Match.MatchType == MatchTypeEnum.ChampionsLeague),
                Ec = events.Count(x => x.Match.MatchType == MatchTypeEnum.EnglandCup),
                El = events.Count(x => x.Match.MatchType == MatchTypeEnum.EuropeLeague),
                Epl = events.Count(x => x.Match.MatchType == MatchTypeEnum.Epl),
                Lc = events.Count(x => x.Match.MatchType == MatchTypeEnum.CurlingCup),
                Total = events.Count()
            };
        }
    }
}
