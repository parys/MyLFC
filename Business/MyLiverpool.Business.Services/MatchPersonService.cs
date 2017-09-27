using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchPersonService : IMatchPersonService
    {
        private readonly IMatchPersonRepository _matchPersonRepository;
        private readonly IMapper _mapper;

        public MatchPersonService(IMatchPersonRepository matchPersonRepository, IMapper mapper)
        {
            _matchPersonRepository = matchPersonRepository;
            _mapper = mapper;
        }

        public async Task<MatchPersonDto> CreateAsync(MatchPersonDto dto)
        {
            var entity = _mapper.Map<MatchPerson>(dto);
            await _matchPersonRepository.AddAsync(entity);
            return _mapper.Map<MatchPersonDto>(entity);
        }

        public async Task<MatchPersonDto> UpdateAsync(MatchPersonDto dto)
        {
            var entity = await _matchPersonRepository.GetByComplexIdAsync(dto.MatchId, dto.PersonId);
            if (entity != null)
            {
                entity.PersonType = dto.PersonType;
                entity.Person = null;
                entity.Match = null;
                await _matchPersonRepository.UpdateAsync(entity);
                return _mapper.Map<MatchPersonDto>(entity);
            }
            return await CreateAsync(dto);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _matchPersonRepository.DeleteAsync(id);
            return true;
        }

        public Task<MatchPersonDto> GetByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<MatchPersonDto>> GetListByMatchIdAsync(int matchId)
        {
            var events = await _matchPersonRepository.GetListAsync(x => x.MatchId == matchId);
            return _mapper.Map<IEnumerable<MatchPersonDto>>(events);
        }
    }
}
