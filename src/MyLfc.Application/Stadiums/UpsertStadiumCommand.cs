using FluentValidation;

namespace MyLfc.Application.Stadiums
{
    public class UpsertStadiumCommand
    {
        public abstract class Request
        {
            public string Name { get; set; }

            public string City { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
                RuleFor(x => x.Name)
                    .NotNull()
                    .MaximumLength(50);

                RuleFor(x => x.City)
                    .NotNull()
                    .MaximumLength(50);
            }
        }
    }
}
