using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Xunit;
using Handler = MyLfc.Application.Comments.UpdateCommentVoteCommand.Handler;
using Request = MyLfc.Application.Comments.UpdateCommentVoteCommand.Request;
using Response = MyLfc.Application.Comments.UpdateCommentVoteCommand.Response;

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

        before.Positive.Should().BeTrue();

        var result = await _handler.Handle(request, CancellationToken.None);

        result.Should().NotBeNull();

        // we are not changed comment vote
        var after = _context.CommentVotes.First(x =>
            x.CommentId == request.CommentId && x.UserId == UserSeeder.AdminUserId);
        after.Positive.Should().BeTrue();

        // we are not change comment counts
        var afterCommentPositiveCount = _context.MaterialComments.First(x => x.Id == request.CommentId).PositiveCount;
        var afterCommentNegativeCount = _context.MaterialComments.First(x => x.Id == request.CommentId).NegativeCount;

        afterCommentPositiveCount.Should().Be(beforeCommentPositiveCount);
        afterCommentNegativeCount.Should().Be(beforeCommentNegativeCount);

    }
}
