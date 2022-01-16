using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Users
{
    public class GetUserBirthdaysQuery
    {
        public class Request : IRequest<Response>
        {
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
                var users = await _context.Users.Where(x => x.Birthday.Value.Date.Day == DateTimeOffset.UtcNow.Day &&
                                                      x.Birthday.Value.Date.Month == DateTimeOffset.UtcNow.Month &&
                                                      x.LastModified.AddMonths(2).Date > DateTimeOffset.UtcNow.Date)
                    .OrderByDescending(x => x.LastModified)
                    .ProjectTo<UserBirthdayDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return new Response {Results = users};
            }
        }


        [Serializable]
        public class Response
        {
            public List<UserBirthdayDto> Results { get; set; }
        }


        [Serializable]
        public class UserBirthdayDto
        {
            public int Id { get; set; }

            public string UserName { get; set; }

            public string Photo { get; set; }
        }
    }
}
