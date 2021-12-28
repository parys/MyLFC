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

namespace MyLfc.Application.Persons
{
    public class GetStuffListQuery
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
                var stuffList = await _context.Persons
                    .AsNoTracking()
                    .Where(x => x.Type == request.Type)
                    .ProjectTo<StuffPersonDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                var tempList = new List<StuffPersonDto>();
                var coach = stuffList.FirstOrDefault(x => x.Position == "Главный тренер");
                if (coach != null)
                {
                    tempList.Add(coach);
                    stuffList.Remove(coach);
                }
                var assistants = stuffList.Where(x => x.Position == "Помощник тренера").ToList();
                if (assistants.Any())
                {
                    foreach (var assistant in assistants)
                    {
                        tempList.Add(assistant);
                        stuffList.Remove(assistant);
                    }
                }
                tempList.AddRange(stuffList);
                return new Response {Results = tempList};
            }
        }

        public class Response
        {
            public List<StuffPersonDto> Results { get; set; }
        }

        /// <summary>
        /// todo look at all props
        /// </summary>
        public class StuffPersonDto
        {
            public int Id { get; set; }

            public string FirstName { get; set; }

            public string FirstRussianName { get; set; }

            public string LastName { get; set; }

            public string LastRussianName { get; set; }

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
