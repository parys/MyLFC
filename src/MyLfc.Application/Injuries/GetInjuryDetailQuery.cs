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

namespace MyLfc.Application.Injuries
{
    public class GetInjuryDetailQuery
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
                var injury = await _context.Injuries.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (injury == null)
                {
                    throw new NotFoundException(nameof(Injury), request.Id);
                }

                return injury;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public int PersonId { get; set; }

            public string PersonName { get; set; }

            public DateTime StartTime { get; set; }

            public DateTime? EndTime { get; set; }

            public string Description { get; set; }
        }
    }
}
