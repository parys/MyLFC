﻿using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;

namespace MyLfc.Application.Features.FaqCategories.Commands;

public class CreateFaqCategoryCommand
{
    public class Request : UpsertFaqCategoryCommand.Request, IRequest<Response>
    {
    }


    public class Validator : UpsertFaqCategoryCommand.Validator<Request>
    {
        public Validator()
        {
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
            var entity = _mapper.Map<FaqCategory>(request);

            _context.FaqCategories.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = entity.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
