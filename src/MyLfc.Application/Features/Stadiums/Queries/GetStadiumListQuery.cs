﻿using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Application.Infrastructure.Pagination;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Stadiums.Queries;

public class GetStadiumListQuery
{
    public class Request : PagedQueryBase, IRequest<Response>
    {
        public string Name { get; set; }
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
            var stadiumsQuery = _context.Stadiums.AsNoTracking();

            stadiumsQuery = stadiumsQuery.OrderByDescending(x => x.Id);

            if (!string.IsNullOrWhiteSpace(request.Name))
            {
                stadiumsQuery = stadiumsQuery.Where(x => x.Name.Contains(request.Name) || x.City.Contains(request.Name));
            }

            return await stadiumsQuery.GetPagedAsync<Response, Stadium, StadiumListDto>(request, _mapper);
        }
    }


    [Serializable]
    public class Response : PagedResult<StadiumListDto>
    {
    }


    [Serializable]
    public class StadiumListDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string City { get; set; }
    }
}
