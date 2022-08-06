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
using MyLfc.Data.Common;

namespace MyLfc.Application.Features.FaqCategories.Queries;

public class GetFaqCategoriesListQuery
{
    public class Request : IRequest<Response>
    {
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly RequestContext _requestContext;

        private readonly IMapper _mapper;

        public Handler(ILiverpoolContext context, IMapper mapper, RequestContext requestContext)
        {
            _context = context;
            _mapper = mapper;
            _requestContext = requestContext;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var faqCategories = _context.FaqCategories.AsNoTracking();

            if (_requestContext.User == null || !_requestContext.User.IsInRole(nameof(RolesEnum.InfoStart)))
            {
                faqCategories = faqCategories.Where(x => !x.ForSiteTeam);
            }

            var result = await faqCategories
                .OrderBy(x => x.Order)
                .ProjectTo<FaqCategoryListDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);
            return new Response { Results = result };
        }
    }


    [Serializable]
    public class Response
    {
        public List<FaqCategoryListDto> Results { get; set; }
    }


    [Serializable]
    public class FaqCategoryListDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte Order { get; set; }

        public bool ForSiteTeam { get; set; }
    }
}
