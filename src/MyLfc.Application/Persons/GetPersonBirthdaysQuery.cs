using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Data.Common;

namespace MyLfc.Application.Persons;

public class GetPersonBirthdaysQuery
{
    public class Request : IRequest<Response>
    {
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
            var persons = await _context.Persons.Where(x => x.Birthday.HasValue &&
                                                        x.Birthday.Value.Date.Day == DateTimeOffset.UtcNow.Day &&
                                                        x.Birthday.Value.Date.Month == DateTimeOffset.UtcNow.Month &&
                                                        x.Type != PersonType.Rival &&
                                                        x.Type != PersonType.CompetitorCoach &&
                                                        x.Type != PersonType.Referee)
                .OrderByDescending(x => x.Id)
                .ProjectTo<PersonBirthdayDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new Response {Results = persons};
        }
    }


    [Serializable]
    public class Response
    {
        public List<PersonBirthdayDto> Results { get; set; }
    }


    [Serializable]
    public class PersonBirthdayDto
    {
        public int Id { get; set; }

        public string FirstRussianName { get; set; }

        public string LastRussianName { get; set; }

        public string Photo { get; set; }

        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
