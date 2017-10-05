using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class ClubService : IClubService
    {
        private readonly IGenericRepository<Club> _clubRepository;
        private readonly IMapper _mapper;

        public ClubService(IGenericRepository<Club> clubRepository, IMapper mapper)
        {
            _clubRepository = clubRepository;
            _mapper = mapper;
        }

        public async Task<ClubDto> CreateAsync(ClubDto dto)
        {
            var club = _mapper.Map<Club>(dto);
            await _clubRepository.CreateAsync(club);
            dto = _mapper.Map<ClubDto>(club);
            return dto;
        }

        public async Task<ClubDto> UpdateAsync(ClubDto dto)
        {
            var club = await _clubRepository.GetByIdAsync(dto.Id);
            club.Name = dto.Name;
            club.EnglishName = dto.EnglishName;
            club.StadiumId = dto.StadiumId;
            club.Stadium = null;
            club.Logo = dto.Logo;
            await _clubRepository.UpdateAsync(club);
            dto = _mapper.Map<ClubDto>(club);
            return dto;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _clubRepository.DeleteAsync(id);
            return true;
        }

        public async Task<ClubDto> GetByIdAsync(int id)
        {
            var model = await _clubRepository.GetByIdAsync(id, x => x.Stadium);
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
            await _clubRepository.UpdateAsync(club);
        }

        public async Task UpdateLogoAsync(string name, string relativePath)
        {
            Expression<Func<Club, bool>> filter = x => string.IsNullOrWhiteSpace(name) || x.EnglishName.ToLowerInvariant() == name.ToLowerInvariant();
            var club = await _clubRepository.GetFirstByFilterAsync(filter);
            if (club != null)
            {
                club.Logo = relativePath;
                await _clubRepository.UpdateAsync(club);
            }
        }

        public async Task<PageableData<ClubDto>> GetListAsync(int page)
        {
            var clubs = await _clubRepository.GetListAsync(page, orderBy: x => x.Name);
            var dtos =  _mapper.Map<ICollection<ClubDto>>(clubs);
            var count = await _clubRepository.CountAsync();
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

        public async Task<ClubDto> GetByNameAsync(string name)
        {
            Expression<Func<Club, bool>> filter = x => string.IsNullOrWhiteSpace(name) || x.EnglishName.ToLowerInvariant() == name.ToLowerInvariant();
            var club = await _clubRepository.GetFirstByFilterAsync(filter);
            if (club != null)
            {
                return _mapper.Map<ClubDto>(club);
            }
            return null;
        }
        
        public async Task<IEnumerable<KeyValuePair<int, string>>> GetClubsByNameWithoutLiverpoolAsync(string typed)
        {
            Expression<Func<Club, bool>> filter = x => x.EnglishName.ToLower() != "liverpool";
            if (!string.IsNullOrWhiteSpace(typed))
            {
                filter = filter.And(x => x.Name.ToLower().Contains(typed.ToLower()) || x.EnglishName.ToLower().Contains(typed.ToLower()));
            }
            var clubs = await _clubRepository.GetListAsync(1, filter: filter);
            return clubs.Select(x => new KeyValuePair<int, string>(x.Id, x.Name));
        }
    }
}
