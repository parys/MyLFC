using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Persistence;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLfc.Application.FaqCategories
{
    public class GetFaqQuery
    {
        public class Request : IRequest<Response>
        {

        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly RequestContext _requestContext;

            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var query = _context.FaqCategories
                    .AsNoTracking();
                if (_requestContext.User == null || !_requestContext.User.IsSiteTeamMember())
                {
                    query = query.Where(x => !x.ForSiteTeam);
                }
                return new Response
                {
                    Results = await query
                        .Include(x => x.Items)
                        .OrderBy(x => x.Order)
                        .ProjectTo<FaqCategoryListDto>(_mapper.ConfigurationProvider)
                        .ToListAsync(cancellationToken)
                };
            }
        }

        public class Response
        {
            public List<FaqCategoryListDto> Results { get; set; }   
        }

        public class FaqCategoryListDto
        {
            public int Id { get; set; }

            public string Name { get; set; }

            public bool ForSiteTeam { get; set; }

            public List<FaqItemListDto> Items { get; set; }
        }

        public class FaqItemListDto
        {
            public int Id { get; set; }

            public string Question { get; set; }

            public string Answer { get; set; }
        }
    }
}
