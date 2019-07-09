using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Clubs
{
    public class GetClubDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var club = await _context.Clubs.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (club == null)
                {
                    throw new NotFoundException(nameof(Club), request.Id);
                }

                return club;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public string Name { get; set; }

            public string EnglishName { get; set; }

            public string StadiumName { get; set; }

            public int StadiumId { get; set; }

            public string Logo { get; set; }
        }
    }
}
