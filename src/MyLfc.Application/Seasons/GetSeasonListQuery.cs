using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;

namespace MyLfc.Application.Seasons
{
    public class GetSeasonListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public string Name { get; set; }
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
                var seasons = _context.Seasons.AsNoTracking();

                if (!string.IsNullOrWhiteSpace(request.Name))
                {
                    seasons = seasons.Where(x => x.StartSeasonYear.ToString().Contains(request.Name));
                }

                seasons = seasons.OrderByDescending(x => x.StartSeasonYear);

                return await seasons.GetPagedAsync<Response, Season, SeasonListDto>(request, _mapper);
            }
        }


        [Serializable]
        public class Response : PagedResult<SeasonListDto>
        {
        }


        [Serializable]
        public class SeasonListDto
        {
            public int Id { get; set; }

            public int StartSeasonYear { get; set; }

            public int EndSeasonYear => StartSeasonYear + 1;
        }
    }
}
