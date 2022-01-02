using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MyLfc.Business.Contracts;

namespace MyLfc.Application.Admin
{
    public class SendTestEmailCommand
    {
        public class Request : IRequest
        {
            public string Email { get; set; }
        }

        public class Handler : IRequestHandler<Request>
        {
            private readonly IEmailSender _emailSender;

            public Handler(IEmailSender emailSender)
            {
                _emailSender = emailSender;
            }

            public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
            {
                await _emailSender.SendEmailAsync(request.Email, "test email", "test one");

                return Unit.Value;
            }
        }
    }
}
