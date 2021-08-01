using FluentValidation;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Wishes
{
    public class UpsertWishCommand
    {
        public abstract class Request
        {
            public string Title { get; set; }

            public string Message { get; set; }

            public WishType Type { get; set; }
            
            public WishStateEnum State { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
                RuleFor(x => x.Title)
                    .NotEmpty()
                    .MaximumLength(30);

                RuleFor(x => x.Message)
                    .NotEmpty();

                RuleFor(x => x.Type).IsInEnum();

                RuleFor(x => x.State).IsInEnum();

            }
        }
    }
}
