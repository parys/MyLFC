using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Users
{
    public class UpdateUserConfigCommand
    {
        public class Request : IRequest<Response>
        {
            public bool IsReplyToPmEnabled { get; set; }

            public bool IsReplyToEmailEnabled { get; set; }

            public bool IsPmToEmailNotifyEnabled { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;

            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var config = await _context.UserConfigs
                    .FirstOrDefaultAsync(x => x.UserId == _requestContext.UserId, cancellationToken);

                if (config == null)
                {
                    config = new UserConfig
                    {
                        UserId = _requestContext.UserId.Value
                    };
                    config = _mapper.Map(request, config);
                    _context.UserConfigs.Add(config);
                }
                else
                {
                    config = _mapper.Map(request, config);
                }

                await _context.SaveChangesAsync(cancellationToken);
                return new Response {Id = _requestContext.UserId.Value};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
