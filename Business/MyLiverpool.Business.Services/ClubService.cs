using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ClubService : IClubService
    {
        private readonly IClubRepository _clubRepository;
        private readonly IMapper _mapper;

        public ClubService(IClubRepository clubRepository, IMapper mapper)
        {
            _clubRepository = clubRepository;
            _mapper = mapper;
        }

        public async Task<ClubDto> CreateAsync(ClubDto dto)
        {
            var club = _mapper.Map<Club>(dto);
            await _clubRepository.AddAsync(club);
            await _clubRepository.SaveChangesAsync();
            dto = _mapper.Map<ClubDto>(club);
            return dto;
        }

        public async Task<ClubDto> UpdateAsync(ClubDto dto)
        {
            var club = await _clubRepository.GetByIdAsync(dto.Id);
            club.Name = dto.Name;
            club.EnglishName = dto.EnglishName;
            club.Stadium = dto.Stadium;
            _clubRepository.Update(club);
            await _clubRepository.SaveChangesAsync();
            dto = _mapper.Map<ClubDto>(club);
            return dto;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _clubRepository.DeleteAsync(id);
            await _clubRepository.SaveChangesAsync();
            return true;
        }

        public async Task<ClubDto> GetByIdAsync(int id)
        {
            var model = await _clubRepository.GetByIdAsync(id);
            var dto = _mapper.Map<ClubDto>(model);
            return dto;
        }

        public async Task<string> GetNameAsync(int clubId)
        {
            var club = await _clubRepository.GetByIdAsync(clubId);
            return club?.EnglishName.Trim() ?? string.Empty;
        }

        public async Task UpdateLogoAsync(int clubId, string relativePath)
        {
            var club = await _clubRepository.GetByIdAsync(clubId);
            club.Logo = relativePath;
            _clubRepository.Update(club);
            await _clubRepository.SaveChangesAsync();
        }

        public async Task UpdateLogoAsync(string clubName, string relativePath)
        {
            var club = await _clubRepository.GetByEnglishName(clubName);
            club.Logo = relativePath;
            _clubRepository.Update(club);
            await _clubRepository.SaveChangesAsync();
        }

        public async Task<PageableData<ClubDto>> GetListAsync(int page)
        {
            var clubs = await _clubRepository.GetListAsync(page);
            var dtos =  _mapper.Map<ICollection<ClubDto>>(clubs);
            var count = await _clubRepository.GetCountAsync();
            return new PageableData<ClubDto>(dtos, page, count);
        }

        public async Task<IEnumerable<KeyValuePair<int, string>>> GetClubsByNameAsync(string typed)
        {
            Expression<Func<Club, bool>> filter = x => true;
            if (!string.IsNullOrWhiteSpace(typed))
            {
                filter = filter.And(x => x.Name.Contains(typed));
            }
            var clubs = await _clubRepository.GetListAsync(1, filter: filter);
            return clubs.Select(x => new KeyValuePair<int, string>(x.Id, x.Name));
        }

        public async Task<int> GetIdByNameAsync(string name)
        {
            var club = await _clubRepository.GetByEnglishName(name);
            if (club != null)
            {
                return club.Id;
            }
            throw new NullReferenceException("GetIdByNameAsync");
        }
    }
}
