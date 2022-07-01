using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Data.Common;

namespace MyLfc.Application.Seasons.Queries
{
    public class GetCurrentSeasonQuery
    {
        public class Request : IRequest<Response>
        {
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly IMapper _mapper;

            // TODO add caching
            // private readonly IDistributed

            public Handler(ILiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var seasonId = int.Parse((await _context.HelpEntities.AsNoTracking()
                                     .FirstOrDefaultAsync(x => x.Type == HelperEntityType.CurrentSeason, cancellationToken)).Value ??
                                 DateTimeOffset.UtcNow.Year.ToString());
                var currentSeason = await _context.Seasons.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == seasonId, cancellationToken);

                return currentSeason;
            }      
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public int StartSeasonYear { get; set; }

            [NotMapped]
            public int EndSeasonYear => StartSeasonYear + 1;
        }
    }
}
