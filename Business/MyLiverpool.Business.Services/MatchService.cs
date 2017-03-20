using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchService : IMatchService
    {
        private const string LiverpoolClubEnglishName = "liverpool";
        private readonly IClubRepository _clubRepository;
        private readonly IMapper _mapper;
        private readonly IMatchRepository _matchRepository;

        public MatchService(IMatchRepository matchRepository, IMapper mapper,
            IClubRepository clubRepository)
        {
            _clubRepository = clubRepository;
            _mapper = mapper;
            _matchRepository = matchRepository;
        }

        public async Task<MatchDto> CreateAsync(MatchDto dto)
        {
            var match = _mapper.Map<Match>(dto);
            match = await _matchRepository.AddAsync(match);
            await _matchRepository.SaveChangesAsync();
            dto = _mapper.Map<MatchDto>(match);
            return dto;
        }

        public async Task<MatchDto> UpdateAsync(MatchDto dto)
        {
            var match = await _matchRepository.GetByIdAsync(dto.Id);
            match.DateTime = dto.DateTime;
            match.IsHome = dto.IsHome;
            match.MatchType = (MatchTypeEnum)dto.TypeId;
            match.ClubId = dto.ClubId;
            match.Score = dto.Score;
            _matchRepository.Update(match);
            await _matchRepository.SaveChangesAsync();
            return dto;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _matchRepository.DeleteAsync(id);
            return true;
        }

        public async Task<MatchDto> GetByIdAsync(int id)
        {
            var match = await _matchRepository.GetByIdAsync(id);
            var dto = _mapper.Map<MatchDto>(match);
            return dto;
        }

        public async Task<PageableData<MatchDto>> GetListAsync(int page)
        {
            var liverpoolClub = await _clubRepository.GetByEnglishName(LiverpoolClubEnglishName);
            var matches = await _matchRepository.GetListAsync(page, orderBy: m => m.DateTime);
            var dtos = new List<MatchDto>();
            foreach (var match in matches)
            {
                var dto = _mapper.Map<MatchDto>(match);
                if (match.IsHome)
                {
                    FillClubsFields(dto, liverpoolClub, match.Club);
                }
                else
                {
                    FillClubsFields(dto, match.Club, liverpoolClub);
                }
                dtos.Add(dto);
            }

            var count = await _matchRepository.GetCountAsync();
            return new PageableData<MatchDto>(dtos, page, count);
        }

        private static void FillClubsFields(MatchDto dto, Club homeClub, Club awayClub)
        {
            dto.HomeClubId = homeClub.Id;
            dto.HomeClubName = homeClub.Name;
            dto.HomeClubLogo = homeClub.Logo;
            dto.AwayClubId = awayClub.Id;
            dto.AwayClubName = awayClub.Name;
            dto.AwayClubLogo = awayClub.Logo;
            dto.Stadium = homeClub.Stadium;
        }
    }
}
