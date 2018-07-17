using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Entities.Polls
{
    public class PollAnswer : IEntity
    {
        public int Id { get; set; }

        public int PollId { get; set; }

        public Poll Poll { get; set; }

        [MaxLength(100)]
        public string Text { get; set; }
    }
}
