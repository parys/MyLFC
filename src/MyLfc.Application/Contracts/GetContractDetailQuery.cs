using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Contracts
{
    public class GetContractDetailQuery
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
                var injury = await _context.Contracts.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (injury == null)
                {
                    throw new NotFoundException(nameof(Contract), request.Id);
                }

                return injury;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public int Salary { get; set; }

            public int PersonId { get; set; }

            public DateTimeOffset StartDate { get; set; }

            public DateTimeOffset EndDate { get; set; }

            public string PersonName { get; set; }
        }
    }
}
