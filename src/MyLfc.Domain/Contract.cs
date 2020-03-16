using System;

namespace MyLfc.Domain
{
    public class Contract
    {
        public int Id { get; set; }

        public int Salary { get; set; }

        public int PersonId { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset EndDate { get; set; }

        public Person Person { get; set; }
    }
}
