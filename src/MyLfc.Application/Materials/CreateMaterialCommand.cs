using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class CreateMaterialCommand
    {
        public class Request : IRequest<Response>
        {
            public int CategoryId { get; set; }
            
            public int UserId { get; set; }

            public string Title { get; set; }

            public string Brief { get; set; }

            public string Message { get; set; }

            public string Source { get; set; }

            public string ShortLink { get; set; }

            public string Photo { get; set; }

            public string PhotoPreview { get; set; }

            public bool Pending { get; set; }

            public bool OnTop { get; set; }

            public bool CanCommentary { get; set; }
            
            public MaterialType Type { get; set; }
            
            public bool UsePhotoInBody { get; set; }

            public string Tags { get; set; }                                                       
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;
            
            public Handler(LiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }

        public class Response
        {

        }
    }
}
