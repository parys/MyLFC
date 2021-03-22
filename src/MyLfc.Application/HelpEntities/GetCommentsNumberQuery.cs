using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Common.Entities;

namespace MyLfc.Application.HelpEntities
{
    public class GetCommentsNumberQuery
    {
        public class Request : IRequest<Response>
        {
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            public Handler(LiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entity = await _context.HelpEntities.AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Type == HelperEntityType.CommentsNumber, cancellationToken);

                if (entity == null)
                {
                    return new Response { Result = await SaveAsync(cancellationToken) };
                }

                return new Response { Result = JsonSerializer.Deserialize<CommentsNumber>(entity.Value) };
            }

            private async Task<CommentsNumber> SaveAsync(CancellationToken cancellationToken)
            {
                var commentsNumber = new CommentsNumber
                {
                    AllNumber = await _context.MaterialComments.CountAsync(cancellationToken),
                    UnverifiedNumber = await _context.MaterialComments.Where(x => !x.IsVerified)
                        .CountAsync(cancellationToken)
                };

                var entity = new HelpEntity
                {
                    Type = HelperEntityType.CommentsNumber,
                    Value = JsonSerializer.Serialize(commentsNumber)
                };
                _context.HelpEntities.Add(entity);

                await _context.SaveChangesAsync(cancellationToken);

                return commentsNumber;
            }
        }


        public class Response
        {
            public CommentsNumber Result { get; set; }
        }
    }
}
