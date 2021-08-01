using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Persons
{
    public class GetSquadListQuery
    {
        public class Request : IRequest<Response>
        {
            public PersonType Type { get; set; }
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

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                Expression<Func<Person, bool>> filter = x => true;
                if (request.Type == PersonType.Loan)
                {
                    filter = x => x.Transfers.Any(y => y.OnLoan && !y.Coming && y.FinishDate.Value.Date >= DateTime.Today.Date);
                }
                else if (request.Type == PersonType.First)
                {
                    filter = x => x.Type == PersonType.First &&
                                  !x.Transfers.Any(y => y.OnLoan && !y.Coming &&
                                                        y.FinishDate.Value.Date >= DateTime.Today.Date);
                }
                else if (request.Type == PersonType.Academy)
                {
                    filter = x => x.Type == PersonType.Academy &&
                                  !x.Transfers.Any(y => y.OnLoan && !y.Coming &&
                                                        y.FinishDate.Value.Date >= DateTime.Today.Date);
                }
                var squadList = await _context.Persons.AsNoTracking()
                    .Where(filter)
                    .ProjectTo<SquadPersonDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);
                var goalkeepers = squadList.Where(x => x.Position == "Вратарь");
                var defenders = squadList.Where(x => x.Position == "Защитник");
                var midfielders = squadList.Where(x => x.Position == "Полузащитник");
                var strikers = squadList.Where(x => x.Position == "Форвард");
                return new Response
                {
                    Goalkeepers = goalkeepers.OrderBy(x => x.Number),
                    Defenders = defenders.OrderBy(x => x.Number),
                    Midfielders = midfielders.OrderBy(x => x.Number),
                    Strikers = strikers.OrderBy(x => x.Number)
                };
            }
        }

        public class Response
        {
            public IEnumerable<SquadPersonDto> Goalkeepers;
            public IEnumerable<SquadPersonDto> Defenders;
            public IEnumerable<SquadPersonDto> Midfielders;
            public IEnumerable<SquadPersonDto> Strikers;
        }

        /// <summary>
        /// todo look at all props
        /// </summary>
        public class SquadPersonDto
        {
            public int Id { get; set; }

            public string FirstName { get; set; }

            public string FirstRussianName { get; set; }

            public string LastName { get; set; }

            public string LastRussianName { get; set; }

            public string Nickname { get; set; }

            public PersonType Type { get; set; }

            public string TypeName { get; set; }

            public string Position { get; set; }

            public byte? Number { get; set; }

            public string Country { get; set; }

            public DateTimeOffset? Birthday { get; set; }

            public string Photo { get; set; }

            public string Name => $"{FirstName} {LastName}";
            public string RussianName => $"{FirstRussianName} {LastRussianName}";
        }
    }
}
