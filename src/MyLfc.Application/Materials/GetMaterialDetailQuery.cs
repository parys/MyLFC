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
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class GetMaterialDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }

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

                var material = await materialsQuery.ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                if (material == null || (material.Pending && !request.IncludePending))
                {
                    throw new NotFoundException(nameof(Material), request.Id);
                }

                return material;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public int CategoryId { get; set; }

            public string CategoryName { get; set; }

            public DateTimeOffset AdditionTime { get; set; }

            public int UserId { get; set; }

            public string UserName { get; set; }

            public string Title { get; set; }

            public string Brief { get; set; }

            public string Message { get; set; }

            public int Reads { get; set; }

            public string Source { get; set; }

            public string ShortLink { get; set; }

            public string Photo { get; set; }

            public string PhotoPreview { get; set; }

            public bool Pending { get; set; }

            public bool OnTop { get; set; }

            public bool CanCommentary { get; set; }

            public bool SocialLinks { get; set; }

            public MaterialType Type { get; set; }

            public string TypeName { get; set; }

            public bool UsePhotoInBody { get; set; }

            public string Tags { get; set; }
        }
    }
}
