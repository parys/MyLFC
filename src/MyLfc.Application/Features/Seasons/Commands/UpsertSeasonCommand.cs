using FluentValidation;

namespace MyLfc.Application.Seasons.Commands;

public class UpsertSeasonCommand
{
    public abstract class Request
    {
        public int StartSeasonYear { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {
            RuleFor(x => x.StartSeasonYear).GreaterThanOrEqualTo(1892);
        }
    }
}
