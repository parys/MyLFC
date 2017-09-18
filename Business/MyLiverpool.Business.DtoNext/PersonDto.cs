using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class PersonDto: IDto
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }

        [Required]
        public string FirstRussianName { get; set; }

        public string LastName { get; set; }

        [Required]
        public string LastRussianName { get; set; }

        [Required]

        public PersonType Type { get; set; }

        public string TypeName { get; set; }

        public string Position { get; set; }

        public byte? Number { get; set; }

        public string Country { get; set; }
        
        public DateTimeOffset? Birthday { get; set; }

    //    [Required]
        public string Photo { get; set; }

        public string Name => $"{FirstName} {LastName}";
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
