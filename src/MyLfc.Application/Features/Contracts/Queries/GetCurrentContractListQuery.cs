using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Application.Infrastructure.Pagination;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Contracts.Queries;

public class GetCurrentContractListQuery
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
            var contracts = _context.Contracts.AsNoTracking()
                .Where(x => x.StartDate <= DateTimeOffset.UtcNow && DateTimeOffset.UtcNow <= x.EndDate);

            if (!string.IsNullOrWhiteSpace(request.SortOn) && !string.IsNullOrWhiteSpace(request.SortDirection))
            {
                if (request.SortOn.Contains("PersonName", StringComparison.InvariantCultureIgnoreCase))
                {
                    contracts = request.SortDirection.ToLower() == "asc"
                        ? contracts.OrderBy(x => x.Person.LastName)
                        : contracts.OrderByDescending(x => x.Person.LastName);
                    request.SortOn = null;
                }
                else if (request.SortOn.Contains(nameof(Contract.StartDate),
                    StringComparison.InvariantCultureIgnoreCase))
                {
                    request.SortOn = nameof(Contract.StartDate);
                }
                else if (request.SortOn.Contains(nameof(Contract.EndDate),
                    StringComparison.InvariantCultureIgnoreCase))
                {
                    request.SortOn = nameof(Contract.EndDate);
                }
                else if (request.SortOn.Contains(nameof(Contract.Salary),
                    StringComparison.InvariantCultureIgnoreCase))
                {
                    request.SortOn = nameof(Contract.Salary);
                }
                else if (request.SortOn.Contains("Age", StringComparison.InvariantCultureIgnoreCase))
                {
                    contracts = request.SortDirection.ToLower() == "desc"
                        ? contracts.OrderBy(x => x.Person.Birthday)
                        : contracts.OrderByDescending(x => x.Person.Birthday);
                    request.SortOn = null;
                }
                else
                {
                    contracts = contracts.OrderByDescending(x => x.Id);
                }

            }

            return new Response
            {
                Results = await contracts.GetQueryableAsync<Contract, CurrentContractListDto>(request, _mapper)
            };

        }
    }

    [Serializable]
    public class Response
    {
        public List<CurrentContractListDto> Results = new();
    }


    [Serializable]
    public class CurrentContractListDto
    {
        public int Id { get; set; }

        public int Salary { get; set; }

        public int PersonId { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset EndDate { get; set; }

        public string PersonName { get; set; }

        public int Age { get; set; }
    }
}
