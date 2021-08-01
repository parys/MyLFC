using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Materials
{
    public class GetOtherMaterialsListQuery
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
                var materialsQuery = _context.Materials.AsNoTracking()
                    .Where(x => !x.Pending)
                    .OrderByDescending(x => x.Id);

                var result = await materialsQuery
                    .Take(6)
                    .ProjectTo<OtherMaterialListDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return new Response
                {
                    Results = result
                };
            }
        }


        [Serializable]
        public class Response
        {
            public List<OtherMaterialListDto> Results { get; set; } = new List<OtherMaterialListDto>();
        }


        [Serializable]
        public class OtherMaterialListDto
        {
            public string Title { get; set; }

            public int Id { get; set; }

            public string TypeName { get; set; }
        }
    }
}
