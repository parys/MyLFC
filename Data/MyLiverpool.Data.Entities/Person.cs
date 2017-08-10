using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Person: IEntity
    {
        public Person()
        {
            Transfers = new HashSet<Transfer>();
            Events = new HashSet<MatchEvent>();
            Injuries = new HashSet<Injury>();
        }

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

        public virtual ICollection<Transfer> Transfers { get; set; }

        public virtual ICollection<Injury> Injuries { get; set; }

        public virtual ICollection<Loan> Loans { get; set; }

        public virtual ICollection<MatchEvent> Events { get; set; }

        [NotMapped]
        public string Name => $"{FirstName} {LastName}";
        [NotMapped]
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
