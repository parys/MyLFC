using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Materials
{
    public class GetLatestMaterialsQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
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
                var materialsQuery = _context.Materials.AsQueryable();
                
                return await materialsQuery.GetPagedAsync<Response, Material, MaterialListDto>(request, _mapper);
            }
        }


        public class Response : PagedResult<MaterialListDto>
        {
        }


        public class MaterialListDto
        {
            
        }
    }
}
