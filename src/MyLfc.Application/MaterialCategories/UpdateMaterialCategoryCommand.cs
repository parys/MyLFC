using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.MaterialCategories;

public class UpdateMaterialCategoryCommand
{
    public class Request : UpsertMaterialCategoryCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertMaterialCategoryCommand.Validator<Request>
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
            var materialCategory = await _context.MaterialCategories
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (materialCategory == null)
            {
                throw new NotFoundException(nameof(MaterialCategory), request.Id);
            }

            materialCategory = _mapper.Map(request, materialCategory);

            await _context.SaveChangesAsync(cancellationToken);

            return new Response {Id = materialCategory.Id};
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
