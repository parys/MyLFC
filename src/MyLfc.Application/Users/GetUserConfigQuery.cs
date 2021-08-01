using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;

namespace MyLfc.Application.Users
{
    public class GetUserConfigQuery
    {
        public class Request : IRequest<Response>
        {
            public int UserId { get; set; }
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
                var model = await _context.UserConfigs
                                .AsNoTracking()
                                .FirstOrDefaultAsync(x => x.UserId == request.UserId, cancellationToken)
                            ?? new UserConfig();
                return _mapper.Map<Response>(model);
            }
        }


        public class Response
        {
            public bool IsReplyToPmEnabled { get; set; }

            public bool IsReplyToEmailEnabled { get; set; }

            public bool IsPmToEmailNotifyEnabled { get; set; }
        }
    }
}
