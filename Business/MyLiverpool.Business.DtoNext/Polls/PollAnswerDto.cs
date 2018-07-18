using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto.Polls
{
    public class PollAnswerDto : IDto
    {
        public int Id { get; set; }

        public int PollId { get; set; }

        [MaxLength(100)]
        public string Text { get; set; }
    }
}
