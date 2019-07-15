using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using MyLfc.Application.Notifications;
using MyLfc.Application.Users;
using MyLfc.Common.Web.Hubs;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class CommentService : ICommentService
    {
        private readonly IMaterialCommentRepository _commentService;
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        private readonly IEmailSender _messageService;
        private readonly IHttpContextAccessor _accessor;
        private readonly ISignalRHubAggregator _signalRHubAggregator;
        
        public CommentService(IMapper mapper, IMaterialCommentRepository commentService,
            IUserService userService, IHttpContextAccessor accessor,
            IEmailSender messageService, ISignalRHubAggregator signalRHubAggregator,
            IMediator mediator)
        {
            _mapper = mapper;
            _commentService = commentService;
            _userService = userService;
            _accessor = accessor;
            _messageService = messageService;
            _signalRHubAggregator = signalRHubAggregator;
            _mediator = mediator;
        }
        
        public async Task<CommentDto> AddAsync(CommentDto model)
        {
            var comment = _mapper.Map<MaterialComment>(model);
            comment.AdditionTime = comment.LastModified = DateTime.Now;
            comment.Message = comment.Message;
    //todo        comment.Message = await _helperService.SanitizeRudWordsAsync(comment.Message);
            try
            {
                comment = await _commentService.AddAsync(comment);
                var result = _mapper.Map<CommentDto>(comment);
                result.AuthorUserName = await _userService.GetUsernameAsync(comment.AuthorId);
                result.Photo = await _userService.GetPhotoPathAsync(comment.AuthorId);
                if (comment.ParentId.HasValue)
                {
                    await SendNotificationsAsync(comment.ParentId.Value, comment.Id, result.AuthorUserName, comment.Message);
                }
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<bool> UpdateAsync(CommentDto model)
        {
            var comment = await _commentService.GetByIdAsync(model.Id);
            if (comment == null)
            {
                return false;
            }
            comment.LastModified = DateTime.Now;
            comment.Answer = model.Answer;
            comment.Message = model.Message;
          //todo  comment.Message = await _helperService.SanitizeRudWordsAsync(model.Message);
            try
            {
                await _commentService.UpdateAsync(comment);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
        
        public async Task<int> CountAsync(Expression<Func<MaterialComment, bool>> filter = null)
        {
            return await _commentService.GetCountAsync(filter);
        }

        public async Task<bool> UpdateVoteAsync(CommentVoteDto dto)
        {
            var vote = await _commentService.GetVoteByIdAsync(dto.CommentId, dto.UserId);
            if (vote != null)
            {
                vote.Positive = dto.Positive;
                await _commentService.UpdateVoteAsync(vote);
            }
            else
            {
                var comment = await _commentService.GetByIdAsync(dto.CommentId);
                if (comment.AuthorId == dto.UserId)
                {
                    return false;
                }
                vote = _mapper.Map<CommentVote>(dto);
                await _commentService.AddVoteAsync(vote);
            }
            return true;
        }

        public async Task<IEnumerable<CommentDto>> GetLastListAsync()
        {
            var comments = await _commentService.GetLastAsync(GlobalConstants.LastCommentsCount, SortOrder.Descending, m => m.AdditionTime);
            foreach (var comment in comments)
            {
                comment.Message = Regex.Replace(Regex.Replace(comment.Message, "&.*?;", string.Empty), "<.*?>", string.Empty);
                if (comment.Message.Length > GlobalConstants.LastCommentMessageSymbolCount)
                    comment.Message = comment.Message.Substring(0, GlobalConstants.LastCommentMessageSymbolCount) +
                                      "...";
            }
            return _mapper.Map<IEnumerable<CommentDto>>(comments.Where(x => !string.IsNullOrWhiteSpace(x.Message)));
        }

        private async Task SendNotificationsAsync(int parentCommentId, int commentId, string authorUserName, string commentText)
        {
            var parentComment = await _commentService.GetByIdAsync(parentCommentId);
            var userConfig = await _mediator.Send(new GetUserConfigQuery.Request {UserId = parentComment.AuthorId});
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
            var user = await _userService.GetUserAsync(parentComment.AuthorId);
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
}
