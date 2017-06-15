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
    public class TransferService : ITransferService
    {
        private readonly ITransferRepository _transferRepository;
        private readonly IMapper _mapper;

        public TransferService(ITransferRepository transferRepository, IMapper mapper)
        {
            _transferRepository = transferRepository;
            _mapper = mapper;
        }

        public async Task<TransferDto> CreateAsync(TransferDto dto)
        {
            var entity = _mapper.Map<Transfer>(dto);
            entity = await _transferRepository.AddAsync(entity);
            return _mapper.Map<TransferDto>(entity);
        }

        public async Task<TransferDto> UpdateAsync(TransferDto dto)
        {
            var entity = await _transferRepository.GetByIdAsync(dto.Id);
            entity.Club = null;
            entity.ClubId = dto.ClubId;
            entity.Person = null;
            entity.PersonId = entity.PersonId;
            entity.StartDate = dto.StartDate;
            entity.Amount = dto.Amount;
            entity.Coming = dto.Coming;
            entity.FinishDate = dto.FinishDate;
            entity.OnLoan = dto.OnLoan;
            await _transferRepository.UpdateAsync(entity);
            return _mapper.Map<TransferDto>(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _transferRepository.DeleteAsync(id);
            return true;
        }

        public async Task<TransferDto> GetByIdAsync(int id)
        {
            var entity = await _transferRepository.GetByIdAsync(id);
            return _mapper.Map<TransferDto>(entity);
        }

        public async Task<PageableData<TransferDto>> GetListAsync(int page, int itemsPerPage = 15)
        {
            Expression<Func<Transfer, bool>> filter = m => true;
           // if (seasonId.HasValue)
            {
          //      filter = filter.And(m => m.SeasonId == seasonId.Value);
            }
            var transfers = await _transferRepository.GetListAsync(page, orderBy: x => x.StartDate);
            var dtos = _mapper.Map<ICollection<TransferDto>>(transfers);
            var count = await _transferRepository.GetCountAsync();
            return new PageableData<TransferDto>(dtos, page, count);
        }
    }
}
