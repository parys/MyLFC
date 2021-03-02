using System;
using FluentValidation;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Persons
{
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
                RuleFor(x => x.FirstRussianName).NotEmpty();

                RuleFor(x => x.LastRussianName).NotEmpty();

                RuleFor(x => x.Type).IsInEnum();
            }
        }
    }
}
