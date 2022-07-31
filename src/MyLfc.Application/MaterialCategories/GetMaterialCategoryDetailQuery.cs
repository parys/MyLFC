using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Data.Common;

namespace MyLfc.Application.MaterialCategories;

public class GetMaterialCategoryDetailQuery
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
            var materialCategory = await _context.MaterialCategories.AsNoTracking()
                .ProjectTo<Response>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (materialCategory == null)
            {
                throw new NotFoundException(nameof(MaterialCategory), request.Id);
            }

            return materialCategory;
        }
    }


    [Serializable]
    public class Response
    {
        public int Id { get; set; }
        
        public string Name { get; set; }

        public string Description { get; set; }

        public MaterialType MaterialType { get; set; }
    }
}
