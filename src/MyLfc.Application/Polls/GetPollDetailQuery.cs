using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain.Polls;

namespace MyLfc.Application.Polls;

public class GetPollDetailQuery
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
            var poll = await _context.Polls.AsNoTracking()
                .ProjectTo<Response>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (poll == null)
            {
                throw new NotFoundException(nameof(Poll), request.Id);
            }

            return poll;
        }
    }


    [Serializable]
    public class Response
    {
        public int Id { get; set; }
    }
}
