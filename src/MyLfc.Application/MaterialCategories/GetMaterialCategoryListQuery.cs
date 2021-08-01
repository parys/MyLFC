using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.MaterialCategories
{
    public class GetMaterialCategoryListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public MaterialType MaterialType { get; set; }
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
                request.PageSize = 100; // right now need all, but maybe changed in future
                var materialCategories = _context.MaterialCategories.AsNoTracking()
                    .Where(x => x.MaterialType == request.MaterialType);
                request.SortDirection = "asc";
                request.SortOn = nameof(MaterialCategory.Name);

                
                return await materialCategories.GetPagedAsync<Response, MaterialCategory, MaterialCategoryListDto>(request, _mapper);
            }
        }


        [Serializable]
        public class Response : PagedResult<MaterialCategoryListDto>
        {
        }


        [Serializable]
        public class MaterialCategoryListDto
        {
            public int Id { get; set; }

            public int ItemsCount { get; set; }

            public string Name { get; set; }

            public string Description { get; set; }

            public MaterialType MaterialType { get; set; }
        }
    }
}
