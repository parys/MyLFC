using FluentValidation;

namespace MyLfc.Application.MatchEvents
{
    public class UpsertMatchEventCommand
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
