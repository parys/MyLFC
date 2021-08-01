using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Seasons
{
    public class GetSeasonStatisticsQuery
    {
        public class Request : IRequest<Response>
        {
            public int SeasonId { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly IMapper _mapper;
            
            public Handler(ILiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            //todo right now it executes in memory, not in SQL
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {

                if (request.SeasonId == 0)
                {
                    request.SeasonId = await GetCurrentSeasonIdAsync();
                }
                var events = _context.MatchEvents
                    .AsNoTracking()
                    .Where(x => x.Match.SeasonId == request.SeasonId
                                 && x.Match.MatchType != MatchTypeEnum.PreSeason
                                 && x.Person.Type != PersonType.Rival)
                    .Include(mp => mp.Person)
                    .Include(mp => mp.Match).ToList();
                var persons = events.GroupBy(x => x.PersonId);

                 var results =  persons.Select(person => new PersonStatisticDto
                {
                    PersonId = person.Key,
                    PersonName = person.First().Person.RussianName,
                    Goals = Count(person.Where(x => x.Type == MatchEventType.Goal || x.Type == MatchEventType.GoalPenalty)),
                    Assists = Count(person.Where(x => x.Type == MatchEventType.Assist)),
                    Yellows = Count(person.Where(x => x.Type == MatchEventType.Yellow)),
                    Reds = Count(person.Where(x => x.Type == MatchEventType.Red))
                });
                return new Response
                {
                    Id = request.SeasonId,
                    Persons = results.ToList()
                };
            }

            //todo duplicates
            private async Task<int> GetCurrentSeasonIdAsync()
            {
                return int.Parse((await _context.HelpEntities
                                     .FirstOrDefaultAsync(x => x.Type == HelperEntityType.CurrentSeason)).Value ?? DateTime.Today.Year.ToString());
            }

            private StatisticsDto Count(IEnumerable<MatchEvent> events)
            {
                return new StatisticsDto
                {
                    Cl = events.Count(x => x.Match.MatchType == MatchTypeEnum.ChampionsLeague),
                    Ec = events.Count(x => x.Match.MatchType == MatchTypeEnum.EnglandCup),
                    El = events.Count(x => x.Match.MatchType == MatchTypeEnum.EuropeLeague),
                    Epl = events.Count(x => x.Match.MatchType == MatchTypeEnum.Epl),
                    Lc = events.Count(x => x.Match.MatchType == MatchTypeEnum.CurlingCup),
                    Total = events.Count()
                };
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public List<PersonStatisticDto> Persons { get; set; }
        }

        public class PersonStatisticDto
        {
            public int PersonId { get; set; }

            public string PersonName { get; set; }

            public StatisticsDto Goals { get; set; }

            public StatisticsDto Assists { get; set; }

            public StatisticsDto Yellows { get; set; }

            public StatisticsDto Reds { get; set; }
        }

        public class StatisticsDto
        {
            public int Epl { get; set; }

            public int Ec { get; set; }

            public int Lc { get; set; }

            public int El { get; set; }

            public int Cl { get; set; }

            public int Total { get; set; }
        }
    }
}
