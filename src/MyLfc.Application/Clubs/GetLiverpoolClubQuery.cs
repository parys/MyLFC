using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLiverpool.Common.Utilities;

namespace MyLfc.Application.Clubs
{
    public class GetLiverpoolClubQuery
    {
        private static Club _club;
        public class Request : IRequest<Club>
        {
        }


        public class Handler : IRequestHandler<Request, Club>
        {
            private readonly ILiverpoolContext _context;
            
            public Handler(ILiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Club> Handle(Request request, CancellationToken cancellationToken)
            {
                if (_club != null) return _club;

                _club = await _context.Clubs.AsNoTracking()
             //       .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.EnglishName == GlobalConstants.LiverpoolClubEnglishName, cancellationToken);

                if (_club == null)
                {
                    throw new NotFoundException(nameof(Club), GlobalConstants.LiverpoolClubEnglishName);
                }

                return _club;
            }
        }


        //[Serializable]
        //public class Response
        //{
        //    public int Id { get; set; }

        //    public string Name { get; set; }

        //    public string EnglishName { get; set; }

        //    public string StadiumName { get; set; }

        //    public int StadiumId { get; set; }

        //    public string Logo { get; set; }
        //}
    }
}
