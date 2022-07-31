using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Data.Common;
using MyLfc.Data.Common.Entities;

namespace MyLfc.Application.Admin;

public class CalculateCommentsNumberCommand
{
    public class Request : IRequest
    {

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
            var entity =
                await _context.HelpEntities.FirstOrDefaultAsync(x => x.Type == HelperEntityType.CommentsNumber,
                    cancellationToken) ?? new HelpEntity {Type = HelperEntityType.CommentsNumber};

            var commentsNumber = new CommentsNumber
            {
                AllNumber = await _context.MaterialComments.CountAsync(cancellationToken),
                UnverifiedNumber = await _context.MaterialComments.Where(x => !x.IsVerified)
                    .CountAsync(cancellationToken)
            };

            entity.Value = JsonSerializer.Serialize(commentsNumber);
            if (entity.Id > 0)
            {
                _context.HelpEntities.Update(entity);
            }
            else
            {
                _context.HelpEntities.Add(entity);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
