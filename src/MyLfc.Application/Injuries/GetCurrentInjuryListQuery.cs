using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Injuries
{
    public class GetCurrentInjuryListQuery
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
                var injuries = await _context.Injuries.AsNoTracking()
                    .Where(x => !x.EndTime.HasValue)
                    .OrderByDescending(i => i.StartTime)
                    .ProjectTo<InjuryListDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return new Response
                {
                    Results = injuries
                };
            }
        }


        [Serializable]
        public class Response
        {
            public List<InjuryListDto> Results { get; set; } = new List<InjuryListDto>();
        }

        [Serializable]
        public class InjuryListDto
        {
            public int Id { get; set; }

            public string PersonName { get; set; }

            public string PersonPhoto { get; set; }

            public string Description { get; set; }
        }
    }
}
