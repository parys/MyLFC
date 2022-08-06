using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Features.FaqItems.Queries;

public class GetFaqItemsListQuery
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
            var faqCategories = _context.FaqItems.AsNoTracking();

            var result = await faqCategories
                .OrderBy(x => x.Order)
                .ProjectTo<FaqItemListDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);
            return new Response { Results = result };
        }
    }


    [Serializable]
    public class Response
    {
        public List<FaqItemListDto> Results { get; set; }
    }


    [Serializable]
    public class FaqItemListDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
