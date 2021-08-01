using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Wishes
{
    public class GetWishDetailQuery
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
                var transfer = await _context.Wishes.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (transfer == null)
                {
                    throw new NotFoundException(nameof(Wish), request.Id);
                }

                return transfer;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public string Title { get; set; }

            public string Message { get; set; }

            public WishType Type { get; set; }

            public string TypeName { get; set; }

            public WishStateEnum State { get; set; }

            public string StateName { get; set; }
        }
    }
}
