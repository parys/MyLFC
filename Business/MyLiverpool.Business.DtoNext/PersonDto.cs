using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.DtoNext
{
    public class PersonDto: IDto
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string FirstRussianName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string LastRussianName { get; set; }

        [Required]

        public PersonType Type { get; set; }

        public string TypeName { get; set; }

        [Required]
        public DateTime Birthday { get; set; }

    //    [Required]
        public string Photo { get; set; }

        public string Name => $"{FirstName} {LastName}";
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
