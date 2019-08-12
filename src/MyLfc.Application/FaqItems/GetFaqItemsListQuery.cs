using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Persistence;

namespace MyLfc.Application.FaqItems
{
    public class GetFaqItemsListQuery
    {
        public class Request : IRequest<Response>
        {
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var faqCategories = _context.FaqItems.AsNoTracking();
                
                var result = await faqCategories
                    .OrderBy(x => x.Order)
                    .ProjectTo<FaqItemListDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);
                return new Response {Results = result};
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
}
