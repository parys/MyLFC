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
        private readonly IGenericRepository<Injury> _injuryRepository;
        private readonly IMapper _mapper;

        public InjuryService(IGenericRepository<Injury> injuryRepository, IMapper mapper)
        {
            _injuryRepository = injuryRepository;
            _mapper = mapper;
        }

        public async Task<InjuryDto> CreateAsync(InjuryDto dto)
        {
            var model = _mapper.Map<Injury>(dto);
            await _injuryRepository.CreateAsync(model);
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
            var model = await _injuryRepository.GetByIdAsync(id, true, x => x.Person);
            if (model != null)
            {
                return _mapper.Map<InjuryDto>(model);
            }
            return null;
        }

        public async Task<PageableData<InjuryDto>> GetListAsync(int page, int itemsPerPage = 15)
        {
            Expression<Func<Injury, bool>> filter = m => true;

            var injuries = await _injuryRepository.GetListAsync(page, itemsPerPage, filter, SortOrder.Descending, i => i.StartTime, x => x.Person);
            var dtos = _mapper.Map<IEnumerable<InjuryDto>>(injuries);
            var count = await _injuryRepository.CountAsync(filter);
            return new PageableData<InjuryDto>(dtos, page, count);
        }

        public async Task<IEnumerable<InjuryDto>> GetCurrentListAsync()
        {
            Expression<Func<Injury, bool>> filter = x => !x.EndTime.HasValue;
            var injuries = await _injuryRepository.GetListAsync(filter, SortOrder.Descending, i => i.StartTime, x => x.Person);
            return _mapper.Map<ICollection<InjuryDto>>(injuries);
        }
    }
}
