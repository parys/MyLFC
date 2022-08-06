using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Application.Infrastructure.Pagination;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Clubs.Queries;

public class GetClubListQuery
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
            var clubs = _context.Clubs.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(request.Name))
            {
                clubs = clubs.Where(x => x.Name.Contains(request.Name) || x.EnglishName.Contains(request.Name));
            }

            Expression<Func<Club, object>> sortBy = x => x.Name;
            if (!string.IsNullOrWhiteSpace(request.SortOn))
            {
                if (request.SortOn.Contains(nameof(Club.Name),
                    StringComparison.InvariantCultureIgnoreCase))
                {
                    sortBy = x => x.Name;
                }
                else if (request.SortOn.Contains(nameof(Club.EnglishName),
                    StringComparison.InvariantCultureIgnoreCase))
                {
                    sortBy = x => x.EnglishName;
                }
                else if (request.SortOn.Contains(nameof(ClubListDto.StadiumName),
                    StringComparison.InvariantCultureIgnoreCase))
                {
                    sortBy = x => x.Stadium.Name;
                }
            }

            return await clubs.GetPagedAsync<Response, Club, ClubListDto>(request, _mapper, sortBy);
        }
    }


    [Serializable]
    public class Response : PagedResult<ClubListDto>
    {
    }


    [Serializable]
    public class ClubListDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string EnglishName { get; set; }

        public string StadiumName { get; set; }

        public int StadiumId { get; set; }

        public string Logo { get; set; }
    }
}
