using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Clubs.Commands;

public class UpdateClubCommandRequest : UpsertClubCommand.Request, IRequest<UpdateClubCommandResponse>
{
    public int Id { get; set; }
}
public class UpdateClubCommandResponse
{
    public int Id { get; set; }
}

public class UpdateClubCommand
{

    public class Validator : UpsertClubCommand.Validator<UpdateClubCommandRequest>
    {
        public Validator()
        {
            RuleFor(v => v.Id).NotEmpty();
        }
    }


    public class Handler : IRequestHandler<UpdateClubCommandRequest, UpdateClubCommandResponse>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;

        public Handler(ILiverpoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<UpdateClubCommandResponse> Handle(UpdateClubCommandRequest request, CancellationToken cancellationToken)
        {
            var club = await _context.Clubs
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (club == null)
            {
                throw new NotFoundException(nameof(Club), request.Id);
            }

            club = _mapper.Map(request, club);

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateClubCommandResponse { Id = club.Id };
        }
    }
}
