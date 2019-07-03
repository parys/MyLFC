using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchEventService : IMatchEventService
    {
        private readonly IGenericRepository<MatchEvent> _matchEventRepository;
        private readonly IMapper _mapper;

        public MatchEventService(IGenericRepository<MatchEvent> matchEventRepository, IMapper mapper)
        {
            _matchEventRepository = matchEventRepository;
            _mapper = mapper;
        }

        public async Task<MatchEventDto> CreateAsync(MatchEventDto dto)
        {
            var entity = _mapper.Map<MatchEvent>(dto);
            await _matchEventRepository.CreateAsync(entity);
            return _mapper.Map<MatchEventDto>(entity);
        }

        public async Task<MatchEventDto> UpdateAsync(MatchEventDto dto)
        {
            var entity = await _matchEventRepository.GetFirstByPredicateAsync(x => x.Id == dto.Id);
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
            await _matchEventRepository.DeleteAsync(x => x.Id == id);
            return true;
        }

        public async Task<MatchEventDto> GetByIdAsync(int id)
        {
            var model = await _matchEventRepository.GetFirstByPredicateAsync(x => x.Id == id, true, x => x
                .Include(z => z.Season)
                .Include(z => z.Person));
            return model != null ? _mapper.Map<MatchEventDto>(model) : null;
        }

        public async Task<IEnumerable<MatchEventDto>> GetListByMatchIdAsync(int matchId)
        {
            var events =
                await _matchEventRepository.GetListAsync(filter: x => x.MatchId == matchId, order: SortOrder.Descending,
                    orderBy: x => x.Minute, include: me => me.Include(x => x.Person));
            return _mapper.Map<IEnumerable<MatchEventDto>>(events);
        }
    }
}
