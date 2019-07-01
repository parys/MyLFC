using System;
using FluentValidation;

namespace MyLfc.Application.Injuries
{
    public class UpsertInjuryCommand
    {
        public abstract class Request
        {
            public int PersonId { get; set; }

            public DateTime StartTime { get; set; }

            public DateTime? EndTime { get; set; }

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
