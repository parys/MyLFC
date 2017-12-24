using System;

namespace MyLiverpool.Data.Entities
{
    public class Injury: IEntity
    {
        public int Id { get; set; }

        public int PersonId { get; set; }

        public virtual Person Person { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public string Description { get; set; }
    }
}
