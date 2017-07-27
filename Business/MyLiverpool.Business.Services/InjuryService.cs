using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class InjuryService: IInjuryService
    {
        private readonly IInjuryRepository _injuryRepository;
        private readonly IMapper _mapper;

        public InjuryService(IInjuryRepository injuryRepository, IMapper mapper)
        {
            _injuryRepository = injuryRepository;
            _mapper = mapper;
        }

        public async Task<InjuryDto> CreateAsync(InjuryDto dto)
        {
            var model = _mapper.Map<Injury>(dto);
            await _injuryRepository.AddAsync(model);
            return _mapper.Map<InjuryDto>(model);
        }

        public async Task<InjuryDto> UpdateAsync(InjuryDto dto)
        {
            var model = await _injuryRepository.GetByIdAsync(dto.Id);
            if (model != null)
            {
                model.Person = null;
                model.PersonId = dto.PersonId;
                model.Description = dto.Description;
                model.StartTime = dto.StartTime;
                model.EndTime = dto.EndTime;
                await _injuryRepository.UpdateAsync(model);
            }
            return _mapper.Map<InjuryDto>(model);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _injuryRepository.DeleteAsync(id);
            return true;
        }

        public async Task<InjuryDto> GetByIdAsync(int id)
        {
            var model = await _injuryRepository.GetByIdAsync(id);
            if (model != null)
            {
                return _mapper.Map<InjuryDto>(model);
            }
            return null;
        }

        public async Task<PageableData<InjuryDto>> GetListAsync(int page, int itemsPerPage = 15)
        {
            Expression<Func<Injury, bool>> filter = m => true;
          //  if (seasonId.HasValue)
           // {
          //      filter = filter.And(m => m.SeasonId == seasonId.Value);
          //  }
            var injuries = await _injuryRepository.GetListAsync(page, itemsPerPage, filter);
            var dtos = _mapper.Map<IEnumerable<InjuryDto>>(injuries);
            var count = await _injuryRepository.GetCountAsync(filter);
            return new PageableData<InjuryDto>(dtos, page, count);
        }

        public async Task<IEnumerable<InjuryDto>> GetCurrentListAsync()
        {
            Expression<Func<Injury, bool>> filter = x => x.EndTime.Date >= DateTime.Today;
            var injuries = await _injuryRepository.GetListAsync(1, 1000, filter);
            return _mapper.Map<ICollection<InjuryDto>>(injuries);
        }
    }
}
