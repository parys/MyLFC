using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Features.RoleGroups.Queries;

public class GetRoleGroupsQuery
{
    public class Request : IRequest<Response>
    {
        public bool IncludeRoles { get; set; }
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
            var roleGroupsQuery = _context.RoleGroups
                .AsNoTracking();
            //if (request.IncludeRoles)
            //{
            //    roleGroupsQuery = roleGroupsQuery
            //        .Include(x => x.RoleGroups)
            //        .ThenInclude(x => x.Role);
            //}

            var roleGroups = await roleGroupsQuery
                .ProjectTo<RoleGroupListDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new Response { Results = roleGroups.OrderBy(x => x.Name) };
        }
    }


    public class Response
    {
        public IEnumerable<RoleGroupListDto> Results { get; set; }
    }


    public class RoleGroupListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string RussianName { get; set; }
        public ICollection<RoleDto> Roles { get; set; }
    }


    public class RoleDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
