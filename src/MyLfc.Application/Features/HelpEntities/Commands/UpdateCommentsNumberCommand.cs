using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Data.Common;
using MyLfc.Data.Common.Entities;

namespace MyLfc.Application.Features.HelpEntities.Commands;

public class UpdateCommentsNumberCommand
{
    public class Request : IRequest
    {
        public int DiffAllNumbers { get; set; }
        public int DiffUnverifiedNumbers { get; set; }
    }

    public class Handler : IRequestHandler<Request>
    {
        private readonly ILiverpoolContext _context;

        public Handler(ILiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
        {
            var commentsEntity =
                await _context.HelpEntities.FirstAsync(x => x.Type == HelperEntityType.CommentsNumber,
                    cancellationToken);

            var entity = JsonSerializer.Deserialize<CommentsNumber>(commentsEntity.Value);
            entity.AllNumber += request.DiffAllNumbers;
            entity.UnverifiedNumber += request.DiffUnverifiedNumbers;

            commentsEntity.Value = JsonSerializer.Serialize(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
