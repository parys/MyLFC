namespace MyLiverpool.Data.Entities.Polls
{
    public class PollAnswerUser
    {
        public int PollId { get; set; }

        public Poll Poll { get; set; }

        public int PollAnswerId { get; set; }

        public PollAnswer PollAnswer { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}
