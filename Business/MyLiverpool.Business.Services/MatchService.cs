using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MatchService : IMatchService
    {
        private readonly IClubService _clubService;
        private readonly IMapper _mapper;
        private readonly IMatchRepository _matchRepository;

        public MatchService(IMatchRepository matchRepository, IMapper mapper,
            IClubService clubService)
        {
            _clubService = clubService;
            _mapper = mapper;
            _matchRepository = matchRepository;
        }

        public async Task<MatchDto> CreateAsync(MatchDto dto)
        {
            var match = _mapper.Map<Match>(dto);
            match = await _matchRepository.AddAsync(match);
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
            match.Club = null;
            match.ReportUrl = dto.ReportUrl;
            match.PhotoUrl = dto.PhotoUrl;
            match.VideoUrl = dto.VideoUrl;
            match.Stadium = null;
            match.StadiumId = dto.StadiumId;
            match.Score = GetScores(dto.ScoreHome, dto.ScoreAway);
            await _matchRepository.UpdateAsync(match);
            return dto;
        }

        public async Task<IEnumerable<MatchDto>> GetForCalendarAsync()
        {
            var liverpoolClub = await _clubService.GetByNameAsync(GlobalConstants.LiverpoolClubEnglishName);
            if (liverpoolClub == null)
            {
                return null;
            }
            var lastMatch = await _matchRepository.GetLastMatchAsync();
            var nextMatch = await _matchRepository.GetNextMatchAsync();
            var dtos = new List<MatchDto>();
            var matches = new List<Match>();
            if (lastMatch != null)
            {
                matches.Add(lastMatch);
            }
            if (nextMatch != null)
            {
                matches.Add(nextMatch);
            }
            foreach (var match in matches)
            {
                var dto = _mapper.Map<MatchDto>(match);
                var clubDto = _mapper.Map<ClubDto>(match.Club);
                if (match.IsHome)
                {
                    FillClubsFields(dto, liverpoolClub, clubDto);
                }
                else
                {
                    FillClubsFields(dto, clubDto, liverpoolClub);
                }
                dtos.Add(dto);
            }
            return dtos;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _matchRepository.DeleteAsync(id);
            return true;
        }

        public async Task<MatchDto> GetByIdAsync(int id)
        {
            var liverpoolClub = await _clubService.GetByNameAsync(GlobalConstants.LiverpoolClubEnglishName);
            if (liverpoolClub == null)
            {
                return null;
            }
            var match = await _matchRepository.GetByIdAsync(id);
            var dto = _mapper.Map<MatchDto>(match);
            var clubDto = _mapper.Map<ClubDto>(match.Club);
            if (match.IsHome)
            {
                FillClubsFields(dto, liverpoolClub, clubDto);
            }
            else
            {
                FillClubsFields(dto, clubDto, liverpoolClub);
            }
            
            return dto;
        }

        public async Task<PageableData<MatchDto>> GetListAsync(int page, int itemsPerPage = 15, int? seasonId = null)
        {
            Expression<Func<Match, bool>> filter = m => true;
            if (seasonId.HasValue)
            {
                filter = filter.And(m => m.SeasonId == seasonId.Value);
            }
            var dtos = await GetMatchesAsync(page, itemsPerPage, filter);
            var count = await _matchRepository.GetCountAsync(filter);
            return new PageableData<MatchDto>(dtos, page, count);
        }

        public async Task<IEnumerable<MatchDto>> GetListForSeasonAsync(int seasonId)
        {
            var pageForGettingAllItems = 1;
            var itemsPerPageForMatch = 100;
            var result = await GetMatchesAsync(pageForGettingAllItems, itemsPerPageForMatch, x => x.SeasonId == seasonId);
            var dtos = _mapper.Map<IEnumerable<MatchDto>>(result);
            return dtos;
        }

        private async Task<IEnumerable<MatchDto>> GetMatchesAsync(int page, int itemsPerPage,
            Expression<Func<Match, bool>> filter)
        {
            var liverpoolClub = await _clubService.GetByNameAsync(GlobalConstants.LiverpoolClubEnglishName);
            var matches = await _matchRepository.GetListAsync(page, itemsPerPage, filter, orderBy: m => m.DateTime);
            var dtos = new List<MatchDto>();
            foreach (var match in matches)
            {
                var dto = _mapper.Map<MatchDto>(match);
                var clubDto = _mapper.Map<ClubDto>(match.Club);
                if (match.IsHome)
                {
                    FillClubsFields(dto, liverpoolClub, clubDto);
                }
                else
                {
                    FillClubsFields(dto, clubDto, liverpoolClub);
                }
                dtos.Add(dto);
            }
            return dtos;
        }

        private static void FillClubsFields(MatchDto dto, ClubDto homeClub, ClubDto awayClub)
        {
            dto.HomeClubId = homeClub.Id;
            dto.HomeClubName = homeClub.Name;
            dto.HomeClubLogo = homeClub.Logo;
            dto.AwayClubId = awayClub.Id;
            dto.AwayClubName = awayClub.Name;
            dto.AwayClubLogo = awayClub.Logo;
        }

        private static string GetScores(string scoreHome, string scoreAway)
        {
            if (string.IsNullOrWhiteSpace(scoreHome) || string.IsNullOrWhiteSpace(scoreAway))
            {
                return null;
            }
            return $"{scoreHome}-{scoreAway}";
        }
    }
}
