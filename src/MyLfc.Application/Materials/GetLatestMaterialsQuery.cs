using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Data.Common;

namespace MyLfc.Application.Materials
{
    public class GetLatestMaterialsQuery
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
                var materialsQuery = _context.Materials.AsNoTracking();

                materialsQuery = materialsQuery
                    .Where(x => !x.Pending)
                    .Where(x => !x.OnTop)
                    .OrderByDescending(x => x.Id);

                var result = await materialsQuery
                    .Take(10)
                    .ProjectTo<MaterialLatestListDto>(_mapper.ConfigurationProvider)
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
            public List<MaterialLatestListDto> Results { get; set; } = new List<MaterialLatestListDto>();
        }

        [Serializable]
        public class MaterialLatestListDto
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

            public string PhotoPreview { get; set; }
            public string Photo { get; set; }

            public MaterialType Type { get; set; }

            public string TypeName { get; set; }
        }
    }
}
