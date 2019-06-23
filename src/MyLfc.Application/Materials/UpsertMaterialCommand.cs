using FluentValidation;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class UpsertMaterialCommand
    {
        public abstract class Request
        {
            public int CategoryId { get; set; }

            public string Title { get; set; }

            public string Brief { get; set; }

            public string Message { get; set; }

            public string Source { get; set; }

            public string Photo { get; set; }

            public string PhotoPreview { get; set; }

            public bool Pending { get; set; }

            public bool OnTop { get; set; }

            public bool CanCommentary { get; set; }

            public bool UsePhotoInBody { get; set; }

            public string Tags { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
                RuleFor(x => x.Title.Length).InclusiveBetween(1, 200);

                RuleFor(x => x.Brief.Length).InclusiveBetween(1, 1000);

                RuleFor(x => x.Message.Length).InclusiveBetween(1, 80000);

                RuleFor(x => x.Source.Length).LessThanOrEqualTo(300)
                    .When(y => string.IsNullOrWhiteSpace(y.Source));

                RuleFor(x => x.Photo.Length).InclusiveBetween(1, 400);

                RuleFor(x => x.PhotoPreview.Length).InclusiveBetween(1, 400);
            }
        }
    }
}
