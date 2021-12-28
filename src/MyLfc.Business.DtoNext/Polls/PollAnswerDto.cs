using System.ComponentModel.DataAnnotations;

namespace MyLfc.Business.Dto.Polls
{
    public class PollAnswerDto : IDto
    {
        public int Id { get; set; }

        public int PollId { get; set; }

        [MaxLength(100)]
        public string Text { get; set; }

        public int VotesCount { get; set; }
    }
}
