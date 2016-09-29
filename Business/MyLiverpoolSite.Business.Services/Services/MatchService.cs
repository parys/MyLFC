using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class MatchService : BaseService, IMatchService
    {
        private readonly IClubService _clubService;
        public MatchService(IUnitOfWork unitOfWork, IMapper mapper, IClubService clubService) : base(unitOfWork, mapper)
        {
            _clubService = clubService;
        }

        public async Task<MatchDto> CreateAsync(MatchDto dto)
        {
            var match = _mapper.Map<Match>(dto);
            match.ClubId = await _clubService.GetIdByNameAsync(dto.ClubName);
            _unitOfWork.MatchRepository.Add(match);
            await _unitOfWork.SaveAsync();
            dto = _mapper.Map<MatchDto>(match);
            return dto;
        }

        public async Task<MatchDto> UpdateAsync(MatchDto dto)
        {
            var match = await _unitOfWork.MatchRepository.GetByIdAsync(dto.Id);
            throw new NotImplementedException();
            //  match.
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitOfWork.MatchRepository.DeleteAsync(id);
            return true;
        }

        public async Task<MatchDto> GetAsync(int id)
        {
            var match = await _unitOfWork.MatchRepository.GetByIdAsync(id);
            var dto = _mapper.Map<MatchDto>(match);
            return dto;
        }

        public async Task<PageableData<MatchDto>> GetListAsync(int page)
        {
            var clubs = await _unitOfWork.MatchRepository.GetAsync(page);
            var dtos = _mapper.Map<ICollection<MatchDto>>(clubs);
            var count = await _unitOfWork.MatchRepository.GetCountAsync();
            return new PageableData<MatchDto>(dtos, page, count);
        }
    }
}
