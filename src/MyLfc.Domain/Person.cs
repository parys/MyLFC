using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;

namespace MyLfc.Domain
{
    public class Person: IEntity
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string FirstRussianName { get; set; }

        public string LastName { get; set; }

        public string LastRussianName { get; set; }

        public PersonType Type { get; set; }

        public string Position { get; set; }

        public byte? Number { get; set; }

        public string Photo { get; set; }

        public string Country { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        public virtual ICollection<Transfer> Transfers { get; set; } = new HashSet<Transfer>();

        public virtual ICollection<Injury> Injuries { get; set; } = new HashSet<Injury>();

        public virtual ICollection<Loan> Loans { get; set; } = new HashSet<Loan>();

        public virtual ICollection<MatchEvent> Events { get; set; } = new HashSet<MatchEvent>();

        public virtual ICollection<MatchPerson> Matches { get; set; } = new HashSet<MatchPerson>();

        [NotMapped]
        public string Name => $"{FirstName} {LastName}";
        [NotMapped]
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
