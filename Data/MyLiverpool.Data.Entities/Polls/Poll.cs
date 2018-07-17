using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Entities.Polls
{
    public class Poll : IEntity
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Question { get; set; }

        public DateTimeOffset StartTime { get; set; }

        public DateTimeOffset? EndTime { get; set; }

        public ICollection<PollAnswer> Answers { get; set; } = new HashSet<PollAnswer>();

        public virtual ICollection<MaterialComment> Comments { get; set; } = new List<MaterialComment>();
    }
}
