using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.FaqItems;

public class GetFaqItemDetailQuery
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
            var faqItem = await _context.FaqItems.AsNoTracking()
                .ProjectTo<Response>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (faqItem == null)
            {
                throw new NotFoundException(nameof(FaqItem), request.Id);
            }

            return faqItem;
        }
    }


    [Serializable]
    public class Response
    {
        public int Id { get; set; }

        public string Question { get; set; }

        public string Answer { get; set; }

        public bool ForSiteTeam { get; set; }

        public byte Order { get; set; }

        public int FaqCategoryId { get; set; }
    }
}
