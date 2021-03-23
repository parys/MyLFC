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

        public string Nickname { get; set; }

        public PersonType Type { get; set; }

        public string Position { get; set; }

        public byte? Number { get; set; }

        public string Photo { get; set; }

        public string Country { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        public ICollection<Transfer> Transfers { get; set; } = new HashSet<Transfer>();

        public ICollection<Injury> Injuries { get; set; } = new HashSet<Injury>();

        public ICollection<Loan> Loans { get; set; } = new HashSet<Loan>();

        public ICollection<MatchEvent> Events { get; set; } = new HashSet<MatchEvent>();

        public ICollection<MatchPerson> Matches { get; set; } = new HashSet<MatchPerson>();

        public ICollection<Contract> Contracts { get; set; } = new HashSet<Contract>();

        [NotMapped]
        public string Name => $"{FirstName} {LastName}";
        [NotMapped]
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
