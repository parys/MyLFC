using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Common.Utilities.Extensions;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class ClubService : BaseService, IClubService
    {
        public ClubService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
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

        public async Task<IEnumerable<string>> GetClubsByNameAsync(string typed)
        {
            Expression<Func<Club, bool>> filter = x => true;
            if (!string.IsNullOrWhiteSpace(typed))
            {
                filter = filter.And(x => x.Name.Contains(typed));
            }
            var clubs = await _unitOfWork.ClubRepository.GetAsync(1, filter: filter);
            return clubs.Select(x => x.Name);
        }

        public async Task<int> GetIdByNameAsync(string name)
        {
            var clubs = await _unitOfWork.ClubRepository.GetAsync(x => x.Name.Equals(name));
            return clubs.First().Id;
        }
    }
}
