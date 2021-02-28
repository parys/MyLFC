using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Notifications;
using MyLfc.Application.Users;
using MyLfc.Common.Web.Hubs;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Comments
{
    public class CreateCommentCommand
    {
        public class Request : UpsertCommentCommand.Request, IRequest<Response>
        {
            public int? MaterialId { get; set; }

            public int? MatchId { get; set; }

            public int? ParentId { get; set; }

            public int AuthorId { get; set; }

            public CommentType Type { get; set; }
        }


        public class Validator : UpsertCommentCommand.Validator<Request>
        {
            public Validator()
            {
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;

            private readonly IMediator _mediator;

            private readonly IEmailSender _messageService;
            private readonly IHttpContextAccessor _accessor;
            private readonly ISignalRHubAggregator _signalRHubAggregator;

            public Handler(LiverpoolContext context, IMapper mapper, IMediator mediator, RequestContext requestContext, IEmailSender messageService, IHttpContextAccessor accessor, ISignalRHubAggregator signalRHubAggregator)
            {
                _context = context;
                _mapper = mapper;
                _mediator = mediator;
                _requestContext = requestContext;
                _messageService = messageService;
                _accessor = accessor;
                _signalRHubAggregator = signalRHubAggregator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comment = _mapper.Map<MaterialComment>(request);

                comment.AdditionTime = comment.LastModified = DateTimeOffset.UtcNow;
                comment.AuthorId = _requestContext.UserId.Value;
                comment.IsVerified = _requestContext.User.IsSiteTeamMember();

                _context.MaterialComments.Add(comment);

                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == comment.AuthorId, cancellationToken);
                user.CommentsCount++;

                if (comment.MaterialId.HasValue)
                {
                    var material = await _context.Materials.FirstOrDefaultAsync(x => x.Id == comment.MaterialId.Value,
                        cancellationToken);
                    material.CommentsCount++;
                }

                await _context.SaveChangesAsync(cancellationToken);

                if (comment.ParentId.HasValue)
                {
                    await SendNotificationsAsync(comment.ParentId.Value, comment.Id,
                        _requestContext.User.Claims.First(x => x.Type == "name").Value, comment.Message);
                }
                //todo mediatr
                var addedComment = await _context.MaterialComments.AsNoTracking()
                    .Include(x => x.Author)
                    .FirstOrDefaultAsync(x => x.Id == comment.Id, cancellationToken);
                var response = _mapper.Map<Response>(addedComment);
                response.CanNegativeVote = response.CanPositiveVote = true;
                
                return response;
            }

            private async Task SendNotificationsAsync(int parentCommentId, int commentId, string authorUserName, string commentText)
            {
                var parentComment = await _context.MaterialComments
                    .AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Id == parentCommentId);

                var userConfig = await _mediator.Send(new GetUserConfigQuery.Request { UserId = parentComment.AuthorId });
                if (userConfig.IsReplyToPmEnabled)
                {
                    await SendNotificationAsync(parentComment, commentId, authorUserName, commentText);
                }
                if (userConfig.IsReplyToEmailEnabled)
                {
                    await SendNotificationToEmailAsync(parentComment, commentId, authorUserName, commentText);
                }
            }

            private async Task SendNotificationAsync(MaterialComment parentComment, int commentId, string authorUserName, string commentText)
            {
                var notification = new CreateNotificationCommand.Request
                {
                    DateTime = DateTimeOffset.Now,
                    UserId = parentComment.AuthorId,
                    Type = (NotificationType)parentComment.Type,
                    EntityId = parentComment.MaterialId ?? parentComment.MatchId,
                    CommentId = commentId,
                    Text = $"Пользователь {authorUserName} оставил ответ на ваш комментарий: \"{commentText}\"."
                };
                var notificationDto = await _mediator.Send(notification);
                _signalRHubAggregator.SendToUser(HubEndpointConstants.NewNotifyEndpoint, notificationDto, parentComment.AuthorId);
            }

            private async Task SendNotificationToEmailAsync(MaterialComment parentComment, int commentId, string authorUserName, string commentText)
            {
                const string newAnswer = "Новый ответ на ваш комментарий";
                var user = await _mediator.Send(new GetUserDetailQuery.Request { Id = parentComment.AuthorId });
                if (user != null)
                {
                    await _messageService.SendEmailAsync(user.Email, newAnswer, GetNotificationEmailBody(parentComment, commentId, authorUserName, commentText));
                }
            }

            private string GetNotificationEmailBody(MaterialComment parentComment, int commentId, string authorUserName, string commentText)
            {
                var host = _accessor.HttpContext.Request.Host;

                var link = parentComment.Type.ToString().ToLowerInvariant();

                var callbackUrl = $"https://{host}/{link}/{parentComment.MaterialId ?? parentComment.MatchId}#com{commentId}";
                return $"Пользователь {authorUserName} оставил <a href=\"{callbackUrl}\">ответ</a> на ваш комментарий: \"{commentText}\".";
            }

        }

        //todo temporary
        public class Response
        {
            public int Id { get; set; }

            public DateTimeOffset AdditionTime { get; set; }
            public DateTimeOffset LastModified { get; set; }

            public string AuthorUserName { get; set; }

            public int AuthorId { get; set; }

            public string Photo { get; set; }

            public string Message { get; set; }

            public string Answer { get; set; }
            public int? ParentId { get; set; }

            public int? MaterialId { get; set; }

            public int? MatchId { get; set; }

            public bool IsVerified { get; set; }

            public bool CanPositiveVote { get; set; }

            public bool CanNegativeVote { get; set; }

            public int PositiveCount { get; set; }

            public int NegativeCount { get; set; }

            public CommentType Type { get; set; }

            public string TypeName { get; set; }
        }
    }
}
