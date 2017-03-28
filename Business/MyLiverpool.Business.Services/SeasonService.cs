using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
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
            _seasonRepository.Update(model);
            await _seasonRepository.SaveChangesAsync();
            var result = _mapper.Map<SeasonDto>(model);
            return result;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _seasonRepository.DeleteAsync(id);
           // var season = await _seasonRepository.GetByIdAsync(id);
           // if(season.Matches > 0) not delete //todo 
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
    }
}
