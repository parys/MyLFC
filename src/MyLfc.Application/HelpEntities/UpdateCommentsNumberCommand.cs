using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Common.Entities;

namespace MyLfc.Application.HelpEntities
{
    public class UpdateCommentsNumberCommand
    {
        public class Request : IRequest
        {
            public int DiffAllNumbers { get; set; }
            public int DiffUnverifiedNumbers { get; set; }
        }

        public class Handler : IRequestHandler<Request>
        {
            private readonly LiverpoolContext _context;

            public Handler(LiverpoolContext context)
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
}
