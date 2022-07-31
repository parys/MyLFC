using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain.Polls;

namespace MyLfc.Application.Polls;

public class UpdatePollCommand
{
    public class Request : UpsertPollCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertPollCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.Id).NotEmpty();
        }
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
            var poll = await _context.Polls
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (poll == null)
            {
                throw new NotFoundException(nameof(Poll), request.Id);
            }

            poll = _mapper.Map(request, poll);

            await _context.SaveChangesAsync(cancellationToken);

            return new Response {Id = poll.Id};
        }



        private IEnumerable<PollAnswer> GetAnswersToDelete(IEnumerable<PollAnswer> oldAnswers, IEnumerable<PollAnswer> newAnswers)
        {
            return oldAnswers.Where(x => newAnswers.All(n => n.Id != x.Id));
        }

        private IEnumerable<PollAnswer> GetAnswersToAdd(IEnumerable<PollAnswer> oldAnswers, IEnumerable<PollAnswer> newAnswers)
        {
            return newAnswers.Where(x => oldAnswers.All(n => n.Id != x.Id));
        }

        private IEnumerable<PollAnswer> GetAnswersToUpdate(IEnumerable<PollAnswer> oldAnswers, IEnumerable<PollAnswer> newAnswers)
        {
            return newAnswers.Where(x => oldAnswers.Any(n => n.Id == x.Id));
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
