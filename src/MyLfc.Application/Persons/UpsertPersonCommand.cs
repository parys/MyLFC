using System;
using FluentValidation;
using MyLfc.Domain;
using MyLfc.Data.Common;

namespace MyLfc.Application.Persons;

public class UpsertPersonCommand
{
    public abstract class Request
    {
        public string FirstName { get; set; }

        public string FirstRussianName { get; set; }

        public string LastName { get; set; }

        public string LastRussianName { get; set; }

        public string Nickname { get; set; }

        public PersonType Type { get; set; }
        
        public string Position { get; set; }

        public byte? Number { get; set; }

        public string Country { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        public string Photo { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {
            RuleFor(x => x.FirstRussianName).NotEmpty()
                .MaximumLength(Person.FirstRussianNameLength);

            RuleFor(x => x.LastRussianName).NotEmpty()
                .MaximumLength(Person.LastRussianNameLength);

            RuleFor(x => x.FirstName)
                .MaximumLength(Person.FirstNameLength).When(x => !string.IsNullOrWhiteSpace(x.FirstName));

            RuleFor(x => x.LastName)
                .MaximumLength(Person.LastNameLength).When(x => !string.IsNullOrWhiteSpace(x.LastName));

            RuleFor(x => x.Nickname)
                .MaximumLength(Person.NicknameLength).When(x => !string.IsNullOrWhiteSpace(x.Nickname));

            RuleFor(x => x.Country)
                .MaximumLength(Person.CountryLength).When(x => !string.IsNullOrWhiteSpace(x.Country));

            RuleFor(x => x.Position)
                .MaximumLength(Person.PositionLength).When(x => !string.IsNullOrWhiteSpace(x.Position));


            RuleFor(x => x.Number)
                .Must((x) => x is null or >= 1 and <= 99);
            
            RuleFor(x => x.Type).IsInEnum();
        }
    }
}
