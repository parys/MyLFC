using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchEventService : IMatchEventService
    {
        private readonly IMatchEventRepository _matchEventRepository;
        private readonly IMapper _mapper;

        public MatchEventService(IMatchEventRepository matchEventRepository, IMapper mapper)
        {
            _matchEventRepository = matchEventRepository;
            _mapper = mapper;
        }

        public async Task<MatchEventDto> CreateAsync(MatchEventDto dto)
        {
            var entity = _mapper.Map<MatchEvent>(dto);
            await _matchEventRepository.AddAsync(entity);
            return _mapper.Map<MatchEventDto>(entity);
        }

        public async Task<MatchEventDto> UpdateAsync(MatchEventDto dto)
        {
            var entity = await _matchEventRepository.GetByIdAsync(dto.Id);
            if (entity != null)
            {
                entity.MatchId = dto.MatchId;
                entity.Minute = dto.Minute;
                entity.PersonName = dto.PersonName;
                entity.PersonId = dto.PersonId;
                entity.SeasonId = dto.SeasonId;
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
            var model = await _matchEventRepository.GetByIdAsync(id);
            if(model != null)
            {
                return _mapper.Map<MatchEventDto>(model);
            }
            return null;
        }
    }
}
