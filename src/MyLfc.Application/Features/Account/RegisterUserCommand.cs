﻿using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;

namespace MyLfc.Application.Features.Account
{
    public class RegisterUserCommand
    {
        public class Request : IRequest<Response>
        {
            public string Email { get; set; }
            
            public string Password { get; set; }
            
            public string ConfirmPassword { get; set; }
            
            public string UserName { get; set; }
            
            public string FullName { get; set; }
            
            public DateTimeOffset Birthday { get; set; }
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
                RuleFor(x => x.Password).NotEmpty();
                RuleFor(x => x.ConfirmPassword).NotEmpty();
                RuleFor(x => x.UserName).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IMapper _mapper;
            private readonly UserManager<User> _userManager;
            private readonly IEmailSender _messageService;
            private readonly IOptions<EmailSettings> _settings;
            private const string DefaultPhotoPath = "/content/avatars/default.png";

            public Handler(IMapper mapper, UserManager<User> userManager, IOptions<EmailSettings> settings, IEmailSender messageService)
            {
                _mapper = mapper;
                _userManager = userManager;
                _settings = settings;
                _messageService = messageService;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = _mapper.Map<User>(request);
                user.RegistrationDate = DateTimeOffset.Now;
                user.LastModified = DateTimeOffset.Now;
                user.LockoutEnabled = true;
                user.RoleGroupId = 6;
                user.Photo = DefaultPhotoPath;
                user.Birthday = null;
                
                IdentityResult result = await _userManager.CreateAsync(user, request.Password);
                if (result.Succeeded)
                {
                    // await _userRepository.AddToRoleAsync(user, RolesEnum.Simple.ToString());

                    await SendConfirmEmailAsync(user);
                }

                return new Response {Result = result};
            }


            //TODO duplicate in resend confirm
            private async Task SendConfirmEmailAsync(User user)
            {
                const string registerFinished = "Завершение регистрации";
                await _messageService.SendEmailAsync(user.Email, registerFinished, await GetConfirmEmailBody(user));
            }

            private async Task<string> GetConfirmEmailBody(User user)
            {
                string code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                code = code.Base64ForUrlEncode();

                var callbackUrl = $"{_settings.Value.UiUrl}/account/confirmEmail?userId={user.Id}&code={code}";
                return $"Пожалуйста, подтвердите ваш аккаунт, кликнув <a href=\"{callbackUrl}\">здесь</a>.";
            }
        }

        public class Response
        {
            public IdentityResult Result { get; set; }
        }
    }
}
