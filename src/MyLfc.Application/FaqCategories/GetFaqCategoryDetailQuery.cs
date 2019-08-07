using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.FaqCategories
{
    public class GetFaqCategoryDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var faqCategory = await _context.FaqCategories.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (faqCategory == null)
                {
                    throw new NotFoundException(nameof(FaqCategory), request.Id);
                }

                return faqCategory;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public string Name { get; set; }

            public bool ForSiteTeam { get; set; }

            public byte Order { get; set; }
        }
    }
}
