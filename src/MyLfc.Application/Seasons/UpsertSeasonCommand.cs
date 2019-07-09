using FluentValidation;

namespace MyLfc.Application.Seasons
{
    public class UpsertSeasonCommand
    {
        public abstract class Request
        {
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
            }
        }
    }
}
