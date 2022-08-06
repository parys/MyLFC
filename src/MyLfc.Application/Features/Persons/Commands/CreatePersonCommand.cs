using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using MyLfc.Domain;
using MyLfc.Common.Utilities;
using MyLfc.Data.Common;

namespace MyLfc.Application.Features.Persons.Commands;

public class CreatePersonCommand
{
    public class Request : UpsertPersonCommand.Request, IRequest<Response>
    {
    }


    public class Validator : UpsertPersonCommand.Validator<Request>
    {
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;

        private readonly IWebHostEnvironment _appEnvironment;

        public Handler(ILiverpoolContext context, IMapper mapper, IWebHostEnvironment appEnvironment)
        {
            _context = context;
            _mapper = mapper;
            _appEnvironment = appEnvironment;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var entity = _mapper.Map<Person>(request);

            var fileName = (request.FirstName.Trim() + request.LastName.Trim()).Replace(' ', '_');

            if (request.Photo != null && FileHelper.IsBase64(request.Photo))
            {
                entity.Photo =
                    await FileHelper.SavePersonPhotoAsync(request.Photo, fileName, _appEnvironment.WebRootPath);
            }


            _context.Persons.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return _mapper.Map<Response>(entity);
        }
    }

    //todo temporary
    public class Response
    {
        public int Id { get; set; }

        public string RussianName => FirstRussianName + " " + LastRussianName;
        public string PersonName => FirstRussianName + " " + LastRussianName;

        public string FirstRussianName { get; set; }

        public string LastRussianName { get; set; }

        public PersonType Type { get; set; }

        public string TypeName { get; set; }

        public string Position { get; set; }

        public byte? Number { get; set; }

        public string Country { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        public string Photo { get; set; }
    }
}
