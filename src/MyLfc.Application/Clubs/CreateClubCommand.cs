﻿using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Clubs
{
    public class CreateClubCommand
    {
        public class Request : UpsertClubCommand.Request, IRequest<Response>
        {
        }


        public class Validator : UpsertClubCommand.Validator<Request>
        {
            public Validator()
            {
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entity = _mapper.Map<Club>(request);

                _context.Clubs.Add(entity);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = entity.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
