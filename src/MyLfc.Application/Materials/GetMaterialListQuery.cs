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

namespace MyLfc.Application.Materials
{
    public class GetMaterialListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public int? CategoryId { get; set; }

            public int? UserId { get; set; }

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
                var materialsQuery = _context.Materials.AsNoTracking();

                materialsQuery = materialsQuery.Where(x => !x.Pending).OrderByDescending(x => x.AdditionTime);

                if (request.CategoryId.HasValue)
                {
                    materialsQuery = materialsQuery.Where(x => x.CategoryId == request.CategoryId.Value);
                }

                if (request.UserId.HasValue)
                {
                    materialsQuery = materialsQuery.Where(x => x.AuthorId == request.UserId.Value);
                }

                if (request.MaterialType != MaterialType.Both)
                {
                    materialsQuery = materialsQuery.Where(x => x.Type == request.MaterialType);
                }

                return await materialsQuery.GetPagedAsync<Response, Material, MaterialListDto>(request, _mapper);
            }
        }


        [Serializable]
        public class Response : PagedResult<MaterialListDto>
        {
        }


        [Serializable]
        public class MaterialListDto
        {
            public int Id { get; set; }

            public int CategoryId { get; set; }

            public string CategoryName { get; set; }

            public bool CanCommentary { get; set; }

            public bool Pending { get; set; }

            public DateTimeOffset AdditionTime { get; set; }

            public int CommentsCount { get; set; }

            public string UserName { get; set; }

            public int UserId { get; set; }

            public string Title { get; set; }

            public string Brief { get; set; }

            public int Reads { get; set; }

            public string PhotoPreview { get; set; }
            public string Photo { get; set; }

            public MaterialType Type { get; set; }

            public string TypeName { get; set; }
        }
    }
}
