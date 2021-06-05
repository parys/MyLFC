using System;

namespace MyLfc.Domain
{
    public class Injury: IEntity
    {
        public int Id { get; set; }

        public int PersonId { get; set; }

        public Person Person { get; set; }

        public DateTimeOffset StartTime { get; set; }

        public DateTimeOffset? EndTime { get; set; }

        public string Description { get; set; }
    }
}
