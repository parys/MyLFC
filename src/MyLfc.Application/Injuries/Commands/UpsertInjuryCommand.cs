using System;
using FluentValidation;

namespace MyLfc.Application.Injuries.Commands
{
    public class UpsertInjuryCommand
    {
        public abstract class Request
        {
            public int PersonId { get; set; }

            public DateTimeOffset StartTime { get; set; }

            public DateTimeOffset? EndTime { get; set; }

            public string Description { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
     
            }
        }
    }
}
