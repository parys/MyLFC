using System;
using FluentValidation;

namespace MyLfc.Application.Features.Contracts.Commands;

public class UpsertContractCommand
{
    public abstract class Request
    {
        public int Salary { get; set; }

        public int PersonId { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset EndDate { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {

        }
    }
}
