using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.FaqCategories
{
    public class UpdateFaqCategoryCommand
    {
        public class Request : UpsertFaqCategoryCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertFaqCategoryCommand.Validator<Request>
        {
            public Validator()
            {
                RuleFor(v => v.Id).NotEmpty();
            }
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
                var faqCategory = await _context.FaqCategories
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (faqCategory == null)
                {
                    throw new NotFoundException(nameof(FaqCategory), request.Id);
                }

                faqCategory = _mapper.Map(request, faqCategory);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = faqCategory.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
