using System;
using System.Collections.Generic;
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
    public class LoanService : ILoanService
    {
        private readonly ILoanRepository _loanRepository;
        private readonly IMapper _mapper;

        public LoanService(ILoanRepository loanRepository, IMapper mapper)
        {
            _loanRepository = loanRepository;
            _mapper = mapper;
        }

        public async Task<LoanDto> CreateAsync(LoanDto dto)
        {
            var model = _mapper.Map<Loan>(dto);
            await _loanRepository.AddAsync(model);
            return _mapper.Map<LoanDto>(model);
        }

        public async Task<LoanDto> UpdateAsync(LoanDto dto)
        {
            var model = await _loanRepository.GetByIdAsync(dto.Id);
            if (model != null)
            {
                model.Person = null;
                model.PersonId = dto.PersonId;
                model.ClubId = dto.ClubId;
                model.Club = null;
                model.Came = dto.Came;
                model.StartTime = dto.StartTime;
                model.EndTime = dto.EndTime;
                await _loanRepository.UpdateAsync(model);
            }
            return _mapper.Map<LoanDto>(model);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _loanRepository.DeleteAsync(id);
            return true;
        }

        public async Task<LoanDto> GetByIdAsync(int id)
        {

            var model = await _loanRepository.GetByIdAsync(id);
            if (model != null)
            {
                return _mapper.Map<LoanDto>(model);
            }
            return null;
        }

        public async Task<PageableData<LoanDto>> GetListAsync(int page, int itemsPerPage = 15)
        {
            Expression<Func<Loan, bool>> filter = m => true;
            //  if (seasonId.HasValue)
            // {
            //      filter = filter.And(m => m.SeasonId == seasonId.Value);
            //  }
            var injuries = await _loanRepository.GetListAsync(page, itemsPerPage, filter);
            var dtos = _mapper.Map<IEnumerable<LoanDto>>(injuries);
            var count = await _loanRepository.GetCountAsync(filter);
            return new PageableData<LoanDto>(dtos, page, count);
        }

        public async Task<IEnumerable<LoanDto>> GetCurrentListAsync()
        {
            Expression<Func<Loan, bool>> filter = x => x.EndTime.Date >= DateTime.Today;
            var injuries = await _loanRepository.GetListAsync(1, 1000, filter);
            return _mapper.Map<ICollection<LoanDto>>(injuries);
        }
    }
}
