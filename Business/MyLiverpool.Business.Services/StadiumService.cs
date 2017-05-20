using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class StadiumService : IStadiumService
    {
        private readonly IStadiumRepository _stadiumRepository;
        private readonly IMapper _mapper;

        public StadiumService(IStadiumRepository stadiumRepository, IMapper mapper)
        {
            _stadiumRepository = stadiumRepository;
            _mapper = mapper;
        }

        public async Task<StadiumDto> GetByIdAsync(int id)
        {
            var stadium = await _stadiumRepository.GetByIdAsync(id);
            if (stadium != null)
            {
                return _mapper.Map<StadiumDto>(stadium);
            }
            return null;
        }

        public async Task<PageableData<StadiumDto>> GeListAsync(int page)
        {
            var stadiums = await _stadiumRepository.GetListAsync(page);
            var dtos = _mapper.Map<ICollection<StadiumDto>>(stadiums);
            var count = await _stadiumRepository.GetCountAsync();
            return new PageableData<StadiumDto>(dtos, page, count);
        }

        public async Task<StadiumDto> CreateAsync(StadiumDto dto)
        {
            var stadium = _mapper.Map<Stadium>(dto);
            var result = await _stadiumRepository.AddAsync(stadium);
            return _mapper.Map<StadiumDto>(result);
        }

        public async Task<StadiumDto> UpdateAsync(StadiumDto dto)
        {
            var stadium = await _stadiumRepository.GetByIdAsync(dto.Id);
            stadium.Name = dto.Name;
            stadium.City = dto.City;
            await _stadiumRepository.UpdateAsync(stadium);
            return _mapper.Map<StadiumDto>(stadium);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            try
            {
                await _stadiumRepository.DeleteAsync(id);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
    }
}
