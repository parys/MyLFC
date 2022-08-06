﻿using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Application.Infrastructure.Pagination;
using MyLfc.Domain.Polls;

namespace MyLfc.Application.Features.Polls.Queries;

public class GetPollListQuery
{
    public class Request : PagedQueryBase, IRequest<Response>
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
            var polls = _context.Polls.AsNoTracking();

            polls = polls.OrderByDescending(x => x.Id);
            return await polls.GetPagedAsync<Response, Poll, PollListDto>(request, _mapper);
        }
    }


    [Serializable]
    public class Response : PagedResult<PollListDto>
    {
    }


    [Serializable]
    public class PollListDto
    {

    }
}
