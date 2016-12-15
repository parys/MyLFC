using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchService : IMatchService
    {
        private readonly IClubService _clubService;
        private readonly IMapper _mapper;
        private readonly IMatchRepository _matchRepository;

        public MatchService(IMatchRepository matchRepository, IMapper mapper, IClubService clubService)
        {
            _clubService = clubService;
            _mapper = mapper;
            _matchRepository = matchRepository;
        }

        public async Task<MatchDto> CreateAsync(MatchDto dto)
        {
            var match = _mapper.Map<Match>(dto);
            match.ClubId = await _clubService.GetIdByNameAsync(dto.ClubName);
            match = await _matchRepository.AddAsync(match);
            await _matchRepository.SaveChangesAsync();
            dto = _mapper.Map<MatchDto>(match);
            return dto;
        }

        public async Task<MatchDto> UpdateAsync(MatchDto dto)
        {
            var match = await _matchRepository.GetByIdAsync(dto.Id);
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _matchRepository.DeleteAsync(id);
            return true;
        }

        public async Task<MatchDto> GetByIdAsync(int id)
        {
            var match = await _matchRepository.GetByIdAsync(id);
            var dto = _mapper.Map<MatchDto>(match);
            return dto;
        }

        public async Task<PageableData<MatchDto>> GetListAsync(int page)
        {
            var clubs = await _matchRepository.GetListAsync(page);
            var dtos = _mapper.Map<ICollection<MatchDto>>(clubs);
            var count = await _matchRepository.GetCountAsync();//todo unite two requests
            return new PageableData<MatchDto>(dtos, page, count);
        }
    }
}
