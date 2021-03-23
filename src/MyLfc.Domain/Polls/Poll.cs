using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyLfc.Domain.Polls
{
    public class Poll : IEntity
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Question { get; set; }

        public DateTimeOffset StartTime { get; set; }

        public DateTimeOffset? EndTime { get; set; }

        public ICollection<PollAnswer> Answers { get; set; } = new HashSet<PollAnswer>();

        public ICollection<MaterialComment> Comments { get; set; } = new HashSet<MaterialComment>();
    }
}
