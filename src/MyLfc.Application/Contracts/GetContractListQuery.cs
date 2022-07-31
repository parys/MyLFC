using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;

namespace MyLfc.Application.Contracts;

public class GetContractListQuery
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
            var contracts = _context.Contracts.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(request.SortOn))
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
                else
                {
                    contracts = contracts.OrderByDescending(x => x.Id);
                }
            }
            return await contracts.GetPagedAsync<Response, Contract, ContractListDto>(request, _mapper);

        }
    }

    [Serializable]
    public class Response : PagedResult<ContractListDto>
    {
    }


    [Serializable]
    public class ContractListDto
    {
        public int Id { get; set; }

        public int Salary { get; set; }

        public int PersonId { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset EndDate { get; set; }

        public string PersonName { get; set; }
    }
}
