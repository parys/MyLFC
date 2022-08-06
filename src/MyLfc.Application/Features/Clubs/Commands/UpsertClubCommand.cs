using FluentValidation;

namespace MyLfc.Application.Features.Clubs.Commands;

public class UpsertClubCommand
{
    public abstract class Request
    {
        public string Name { get; set; }

        public string EnglishName { get; set; }

        public int StadiumId { get; set; }

        public string Logo { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {

        }
    }
}
