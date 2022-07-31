namespace MyLfc.Domain;

public class CommentVote
{
    public int UserId { get; set; }

    public int CommentId { get; set; }

    public int EntityId { get; set; }

    public bool Positive { get; set; }

    public FullUser User { get; set; }

    public Comment Comment { get; set; }
}
