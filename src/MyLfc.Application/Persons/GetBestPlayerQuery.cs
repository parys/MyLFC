using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.HelpEntities;
using MyLfc.Data.Common;

namespace MyLfc.Application.Persons
{
    public class GetBestPlayerQuery
    {
        public class Request : IRequest<Response>
        {
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly IMapper _mapper;
            private readonly IMediator _mediator;

            public Handler(ILiverpoolContext context, IMapper mapper, IMediator mediator)
            {
                _context = context;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var playerHelpEntity =
                    await _mediator.Send(new GetEntityQuery.Request {Type = HelperEntityType.BestPlayer},
                        cancellationToken);
                if (playerHelpEntity != null && int.TryParse(playerHelpEntity.Value, out var playerId))
                {
                    return await _context.Persons
                        .AsNoTracking()
                        .ProjectTo<Response>(_mapper.ConfigurationProvider)
                        .FirstOrDefaultAsync(x => x.Id == playerId, cancellationToken);
                }

                return null;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public string FirstRussianName { get; set; }

            public string LastRussianName { get; set; }

            public string Photo { get; set; }

            public string RussianName => $"{FirstRussianName} {LastRussianName}";
        }
    }
}
