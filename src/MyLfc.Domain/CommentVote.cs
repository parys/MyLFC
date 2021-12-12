namespace MyLfc.Domain
{
    public class CommentVote
    {
        public int UserId { get; set; }

        public int CommentId { get; set; }

        public int EntityId { get; set; }

        public bool Positive { get; set; }

        public User User { get; set; }

        public MaterialComment Comment { get; set; }
    }
}
