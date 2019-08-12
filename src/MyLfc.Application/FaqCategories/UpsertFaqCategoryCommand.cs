using FluentValidation;

namespace MyLfc.Application.FaqCategories
{
    public class UpsertFaqCategoryCommand
    {
        public abstract class Request
        {
            public string Name { get; set; }

            public bool ForSiteTeam { get; set; }

            public byte Order { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
                RuleFor(x => x.Name).NotEmpty().MaximumLength(100);
            }
        }
    }
}
