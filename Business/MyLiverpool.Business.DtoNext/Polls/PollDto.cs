using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto.Polls
{
    public class PollDto : IDto
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Question { get; set; }

        public DateTimeOffset StartTime { get; set; }

        public DateTimeOffset? EndTime { get; set; }

        public ICollection<PollAnswerDto> Answers { get; set; } = new HashSet<PollAnswerDto>();
    }
}
