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
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Wishes
{
    public class GetWishListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
            public WishType? TypeId { get; set; } = null;
            public WishStateEnum? StateId { get; set; } = null;
            public string FilterText { get; set; } = null;
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
                var wishesQuery = _context.Wishes.AsNoTracking();

                wishesQuery = wishesQuery.Where(x => (int)x.State == 1 || x.State == 0);

                if (!string.IsNullOrWhiteSpace(request.FilterText) && request.FilterText != "undefined")
                {
                    wishesQuery = wishesQuery.Where(x => x.Title.Contains(request.FilterText) || x.Message.Contains(request.FilterText));
                }

                wishesQuery = wishesQuery.OrderByDescending(x => x.Id);

                return await wishesQuery.GetPagedAsync<Response, Wish, WishListDto>(request, _mapper);
            }
        }


        [Serializable]
        public class Response : PagedResult<WishListDto>
        {
        }


        [Serializable]
        public class WishListDto
        {
            public int Id { get; set; }

            public string Title { get; set; }

            public string Message { get; set; }

            public WishType Type { get; set; }

            public string TypeName { get; set; }

            public WishStateEnum State { get; set; }

            public string StateName { get; set; }
        }
    }
}
