using System;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
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

        public string Photo { get; set; }

        public string Country { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        [NotMapped]
        public string Name => $"{FirstName} {LastName}";
        [NotMapped]
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
