using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class GetPinnedMaterialsQuery
    {
        public class Request : IRequest<Response>
        {
            public bool IncludePending { get; set; } = false;
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
                var materialsQuery = _context.Materials.AsNoTracking();

                materialsQuery = request.IncludePending
                    ? materialsQuery.Where(x => x.OnTop || x.Pending)
                    : materialsQuery.Where(x => x.OnTop && !x.Pending);

                materialsQuery = materialsQuery.OrderByDescending(x => x.AdditionTime);

                var result = await materialsQuery
                    .Take(10)
                    .ProjectTo<MaterialPinnedListDto>(_mapper.ConfigurationProvider)
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
            public List<MaterialPinnedListDto> Results { get; set; } = new List<MaterialPinnedListDto>();
        }


        [Serializable]
        public class MaterialPinnedListDto
        {
            public int Id { get; set; }

            public int CategoryId { get; set; }

            public string CategoryName { get; set; }

            public bool CanCommentary { get; set; }
            
            public DateTimeOffset AdditionTime { get; set; }

            public int CommentsCount { get; set; }

            public string UserName { get; set; }

            public int UserId { get; set; }

            public string Title { get; set; }
            
            public int Reads { get; set; }

            public bool Pending { get; set; }

            public string PhotoPreview { get; set; }

            public string Photo { get; set; }

            public MaterialType Type { get; set; }

            public string TypeName { get; set; }
        }
    }
}
