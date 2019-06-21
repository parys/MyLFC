using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Application.Infrastructure;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class CreateMaterialCommand
    {
        public class Request : UpsertMaterialCommand.Request, IRequest<Response>
        {
                                         
        }

        public class Validator : UpsertMaterialCommand.Validator<Request>
        {
            public Validator() : base()
            {
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, RequestContext requestContext, IMapper mapper)
            {
                _context = context;
                _requestContext = requestContext;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var material = _mapper.Map<Material>(request);
                material.AdditionTime = DateTime.Now;
                material.AuthorId = _requestContext.UserId.Value;
                material.LastModified = DateTime.Now;

                _context.Add(material);
                await _context.SaveChangesAsync(cancellationToken);

                return _mapper.Map<Response>(material);
            }
        }


        public class Response
        {
            public int Id { get; set; }

            public int CategoryId { get; set; }

            public int UserId { get; set; }

            public string Title { get; set; }

            public string Brief { get; set; }

            public string Message { get; set; }

            public string Source { get; set; }

            public string Photo { get; set; }

            public string PhotoPreview { get; set; }

            public bool Pending { get; set; }

            public bool OnTop { get; set; }

            public bool CanCommentary { get; set; }

            public MaterialType Type { get; set; }

            public bool UsePhotoInBody { get; set; }

            public string Tags { get; set; }
        }
    }
}
