using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Features.FaqItems.Commands;

public class UpdateFaqItemCommand
{
    public class Request : UpsertFaqItemCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertFaqItemCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.Id).NotEmpty();
        }
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
            var faqItem = await _context.FaqItems
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (faqItem == null)
            {
                throw new NotFoundException(nameof(FaqItem), request.Id);
            }

            faqItem = _mapper.Map(request, faqItem);
            faqItem.LastUpdated = DateTimeOffset.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = faqItem.Id };
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
