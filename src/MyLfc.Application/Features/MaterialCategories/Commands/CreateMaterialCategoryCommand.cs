using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using MyLfc.Domain;
using MyLfc.Data.Common;

namespace MyLfc.Application.Features.MaterialCategories.Commands;

public class CreateMaterialCategoryCommand
{
    public class Request : UpsertMaterialCategoryCommand.Request, IRequest<Response>
    {
        public MaterialType MaterialType { get; set; }
    }


    public class Validator : UpsertMaterialCategoryCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.MaterialType).IsInEnum().NotEqual(MaterialType.Both);
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
            var entity = _mapper.Map<MaterialCategory>(request);

            _context.MaterialCategories.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = entity.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
