using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class UpdateMaterialCommand
    {
        public class Request : UpsertMaterialCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertMaterialCommand.Validator<UpdateMaterialCommand.Request>
        {
            public Validator() : base()
            {
                RuleFor(v => v.Id).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly RequestContext _requestContext;
            
            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var material = await _context.Materials
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (material == null)
                {
                    throw new NotFoundException(nameof(Material), request.Id);
                }

                if (!_requestContext.User.IsInRole(nameof(RolesEnum.NewsFull)) &&
                    !_requestContext.User.IsInRole(nameof(RolesEnum.BlogFull)))
                {
                    if (material.AuthorId != _requestContext.User?.GetUserId())
                    {
                        throw new UnauthorizedAccessException();
                    }

                    request.Pending = true;
                }

                material = _mapper.Map(request, material);
                material.LastModified = DateTime.Now;

                await _context.SaveChangesAsync(cancellationToken);

                return _mapper.Map<Response>(material);
            }
        }

        public class Response
        {
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
