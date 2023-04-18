using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Clubs.Commands;

public class CreateClubCommandRequest : UpsertClubCommand.Request, IRequest<CreateClubCommandResponse>
{
}
public class CreateClubCommandResponse
{
    public int Id { get; set; }
}

public class CreateClubCommand
{


    public class Validator : UpsertClubCommand.Validator<CreateClubCommandRequest>
    {
        public Validator()
        {
        }
    }


    public class Handler : IRequestHandler<CreateClubCommandRequest, CreateClubCommandResponse>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;

        public Handler(ILiverpoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CreateClubCommandResponse> Handle(CreateClubCommandRequest request, CancellationToken cancellationToken)
        {
            var entity = _mapper.Map<Club>(request);

            _context.Clubs.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateClubCommandResponse { Id = entity.Id };
        }
    }
}
