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

        public SeasonService(IMapper mapper, ISeasonRepository seasonRepository)
        {
            _mapper = mapper;
            _seasonRepository = seasonRepository;
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
    }
}
