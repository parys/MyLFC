using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class ClubService : IClubService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ClubService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ClubDto> CreateAsync(ClubDto dto)
        {
            var club = _mapper.Map<Club>(dto);
            _unitOfWork.ClubRepository.Add(club);
            await _unitOfWork.SaveAsync();
            dto = _mapper.Map<ClubDto>(club);
            return dto;
        }

        public async Task<ClubDto> UpdateAsync(ClubDto dto)
        {
            var club = await _unitOfWork.ClubRepository.GetByIdAsync(dto.Id);
            club.Name = dto.Name;
            club.EnglishName = dto.EnglishName;
            club.Stadium = dto.Stadium;
            _unitOfWork.ClubRepository.Update(club);
            await _unitOfWork.SaveAsync();
            dto = _mapper.Map<ClubDto>(club);
            return dto;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitOfWork.ClubRepository.DeleteAsync(id);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<ClubDto> GetAsync(int id)
        {
            var model = await _unitOfWork.ClubRepository.GetByIdAsync(id);
            var dto = _mapper.Map<ClubDto>(model);
            return dto;
        }

        public async Task<string> GetNameAsync(int clubId)
        {
            var club = await _unitOfWork.ClubRepository.GetByIdAsync(clubId);
            return club?.EnglishName.Trim() ?? string.Empty;
        }

        public async Task UpdateLogoAsync(int clubId, string relativePath)
        {
            var club = await _unitOfWork.ClubRepository.GetByIdAsync(clubId);
            club.Logo = relativePath;
            _unitOfWork.ClubRepository.Update(club);
            await _unitOfWork.SaveAsync();
        }

        public async Task<PageableData<ClubDto>> GetListAsync(int page)
        {
            var clubs = await _unitOfWork.ClubRepository.GetAsync(page);
            var dtos =  _mapper.Map<ICollection<ClubDto>>(clubs);
            var count = await _unitOfWork.ClubRepository.GetCountAsync();
            return new PageableData<ClubDto>(dtos, page, count);
        }
    }
}
