using FluentValidation;

namespace MyLfc.Application.Features.FaqItems.Commands;

public class UpsertFaqItemCommand
{
    public abstract class Request
    {
        public string Question { get; set; }

        public string Answer { get; set; }

        public byte Order { get; set; }

        public int FaqCategoryId { get; set; }

    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {
            RuleFor(x => x.Question).NotEmpty().MaximumLength(200);

            RuleFor(x => x.Answer).NotEmpty().MaximumLength(2000);
        }
    }
}
