using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
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

                var material = await materialsQuery
                    .Include(x =>x.Author)
                    .Include(x =>x.Category)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                //needs to avoid projectTo because using a lot of functions
                if (material == null || (material.Pending && !request.IncludePending))
                {
                    throw new NotFoundException(nameof(Material), request.Id);
                }

                return _mapper.Map<Response>(material);
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
