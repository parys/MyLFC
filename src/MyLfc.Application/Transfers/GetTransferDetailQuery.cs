using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Transfers;

public class GetTransferDetailQuery
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
            var transfer = await _context.Transfers.AsNoTracking()
                .ProjectTo<Response>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (transfer == null)
            {
                throw new NotFoundException(nameof(Transfer), request.Id);
            }

            return transfer;
        }
    }


    [Serializable]
    public class Response
    {
        public int Id { get; set; }

        public bool Coming { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public bool OnLoan { get; set; }

        public DateTimeOffset? FinishDate { get; set; }

        public int? Amount { get; set; }

        public int? ClubId { get; set; }

        public string ClubName { get; set; }

        public string ClubLogo { get; set; }

        public int PersonId { get; set; }

        public string PersonName { get; set; }

        public int? SeasonId { get; set; }

        public string SeasonName { get; set; }
    }
}
