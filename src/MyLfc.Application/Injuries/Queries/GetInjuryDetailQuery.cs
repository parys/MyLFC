using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Injuries.Queries
{
    public class GetInjuryDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
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

            public DateTimeOffset StartTime { get; set; }

            public DateTimeOffset? EndTime { get; set; }

            public string Description { get; set; }
        }
    }
}
