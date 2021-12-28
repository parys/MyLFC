using System;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Data.Common;

namespace MyLfc.Application.MatchPersons
{
    public class UpdateMatchPersonCommand
    {
        public class Request : IRequest<Response>
        {
            public int MatchId { get; set; }

            public int PersonId { get; set; }

            public MatchPersonType PersonType { get; set; }

            public bool IsHome { get; set; }

            public byte? Number { get; set; }

            public byte Order { get; set; }
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.MatchId).NotEmpty();
            }
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
                var person = await _context.Persons
                    .AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Id == request.PersonId, cancellationToken);
                
                var matchPerson = await _context.MatchPersons
                    .AsNoTracking()
                    .FirstOrDefaultAsync(x => x.MatchId == request.MatchId
                                              && x.PersonId == request.PersonId, cancellationToken);
                
                var oldPlaceType = matchPerson?.PersonType;
                var isNew = matchPerson == null;
                matchPerson = _mapper.Map(request, matchPerson);

                matchPerson.Number ??= person.Number;

                if (isNew)
                {
                    matchPerson.Created = DateTimeOffset.UtcNow;
                    _context.MatchPersons.Add(matchPerson);
                }
                else
                {
                    _context.MatchPersons.Update(matchPerson);
                }

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {
                    PersonId = matchPerson.PersonId,
                    MatchId = matchPerson.MatchId,
                    Number = matchPerson.Number,
                    PersonName = string.IsNullOrWhiteSpace(person.Nickname) ? person.RussianName : person.Nickname,
                    PlaceType = request.PersonType.GetMatchPlaceholderType(request.IsHome),
                    Order = request.Order,
                    PersonType = request.PersonType,
                    IsNew = isNew,
                    OldPlaceType = oldPlaceType?.GetMatchPlaceholderType(request.IsHome)
                };
            }
        }

        public class Response
        {
            public int PersonId { get; set; }

            public int MatchId { get; set; }

            public byte? Number { get; set; }

            public string PersonName { get; set; }

            public MatchPersonType PlaceType { get; set; }

            public MatchPersonType PersonType { get; set; }

            public byte Order { get; set; }

            [JsonIgnore]
            public bool IsNew { get; set; }
            [JsonIgnore]
            public MatchPersonType? OldPlaceType { get; set; }
        }
    }
}
