using System;
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
            return _mapper.Map<SeasonDto>(result);
        }

        public async Task<SeasonDto> UpdateAsync(SeasonDto dto)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<SeasonDto> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
