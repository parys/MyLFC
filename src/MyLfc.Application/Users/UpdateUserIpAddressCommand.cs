using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Users
{
    public class UpdateUserIpAddressCommand
    {
        public class Event : INotification
        {
            public string Ip { get; set; }

            public int UserId { get; set; }
        }


        public class Handler : INotificationHandler<Event>
        {
            private readonly ILiverpoolContext _context;

            public Handler(ILiverpoolContext context)
            {
                _context = context;
            }

            public async Task Handle(Event request, CancellationToken cancellationToken)
            {
                if (!string.IsNullOrWhiteSpace(request.Ip))
                {
                    await _context.Database.ExecuteSqlInterpolatedAsync(
                        $"UPDATE AspNetUsers SET Ip={request.Ip}, LastModified={DateTimeOffset.UtcNow} WHERE Id={request.UserId}", cancellationToken);
                }
            }
        }
    }
}
