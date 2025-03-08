using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Shouldly;
using Xunit;
using Handler = MyLfc.Application.Features.Comments.Commands.UpdateCommentVoteCommand.Handler;
using Request = MyLfc.Application.Features.Comments.Commands.UpdateCommentVoteCommand.Request;
using Response = MyLfc.Application.Features.Comments.Commands.UpdateCommentVoteCommand.Response;

namespace MyLfc.Application.Tests.Features.Comments.UpdateCommentVoteCommand;

[Collection(nameof(UpdateCommentVoteCommandCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;
    private readonly ILiverpoolContext _context;

    public HandlerTests(UpdateCommentVoteCommandTestFixture fixture)
    {
        _context = fixture.Context;
        _handler = new Handler(fixture.Context, fixture.AdminRequestContext);
    }

    [Fact]
    public async Task WhenUserProvidedExistedVote_UpdatesExistedEntity()
    {
        var request = new Request
        {
            Positive = true,
            CommentId = UpdateCommentVoteCommandTestFixture.CommentId
        };

        var before = _context.CommentVotes.First(x =>
            x.CommentId == request.CommentId && x.UserId == UserSeeder.AdminUserId);

        var beforeCommentPositiveCount = _context.MaterialComments.First(x => x.Id == request.CommentId).PositiveCount;
        var beforeCommentNegativeCount = _context.MaterialComments.First(x => x.Id == request.CommentId).NegativeCount;

        before.Positive.ShouldBeTrue();

        var result = await _handler.Handle(request, CancellationToken.None);

        result.ShouldNotBeNull();

        // we are not changed comment vote
        var after = _context.CommentVotes.First(x =>
            x.CommentId == request.CommentId && x.UserId == UserSeeder.AdminUserId);
        after.Positive.ShouldBeTrue();

        // we are not change comment counts
        var afterCommentPositiveCount = _context.MaterialComments.First(x => x.Id == request.CommentId).PositiveCount;
        var afterCommentNegativeCount = _context.MaterialComments.First(x => x.Id == request.CommentId).NegativeCount;

        afterCommentPositiveCount.ShouldBe(beforeCommentPositiveCount);
        afterCommentNegativeCount.ShouldBe(beforeCommentNegativeCount);

    }
}
