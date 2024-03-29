﻿using System.IO;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Common.Utilities;

namespace MyLfc.Application.Features.Persons.Commands;

public class UpdatePersonCommand
{
    public class Request : UpsertPersonCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertPersonCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.Id).NotEmpty();
        }
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
            var person = await _context.Persons
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (person == null)
            {
                throw new NotFoundException(nameof(Person), request.Id);
            }

            if (!string.IsNullOrWhiteSpace(person.Photo) && string.IsNullOrWhiteSpace(request.Photo))
            {
                var path = Path.Combine(_appEnvironment.WebRootPath, person.Photo);
                if (File.Exists(path))
                {
                    File.Delete(path);
                }
            }

            person = _mapper.Map(request, person);

            var fileName = (request.FirstName.Trim() + request.LastName.Trim()).Replace(' ', '_');

            if (request.Photo != null && FileHelper.IsBase64(request.Photo))
            {
                person.Photo =
                    await FileHelper.SavePersonPhotoAsync(request.Photo, fileName, _appEnvironment.WebRootPath);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = person.Id };
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
