using System;
using FluentValidation;

namespace MyLfc.Application.Features.Transfers.Commands;

public class UpsertTransferCommand
{
    public abstract class Request
    {
        public bool Coming { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public bool OnLoan { get; set; }

        public DateTimeOffset? FinishDate { get; set; }

        public int? Amount { get; set; }

        public int? ClubId { get; set; }

        public int PersonId { get; set; }

        public int? SeasonId { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {
            RuleFor(x => x)
                .Must(x => x.StartDate.UtcTicks <= x.FinishDate.Value.UtcTicks)
                .When(x => x.FinishDate.HasValue);
        }
    }
}
