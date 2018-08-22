using System;
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
            entity.Created = DateTime.Now;
            await _matchPersonRepository.AddAsync(entity);
            return dto;
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

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException("Complex key");
        }

        public Task<MatchPersonDto> GetByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<MatchPersonDto>> GetListByMatchIdAsync(int matchId)
        {
            var events = await _matchPersonRepository.GetListAsync(x => x.MatchId == matchId, SortOrder.Ascending, x => x.Created);
            return _mapper.Map<IEnumerable<MatchPersonDto>>(events);
        }

        public async Task<bool> DeleteAsync(int matchId, int personId)
        {
            await _matchPersonRepository.DeleteAsync(matchId, personId);
            return true;
        }
    }
}
