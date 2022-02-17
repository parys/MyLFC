using FluentValidation;

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

            public int? UserId { get; set; } 
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
                RuleFor(x => x.Title).NotEmpty().Length(1, 200);

                RuleFor(x => x.Brief).NotEmpty().Length(1, 1000);

                RuleFor(x => x.Message).NotEmpty().Length(1, 80000);

                RuleFor(x => x.Source).MaximumLength(300);

                RuleFor(x => x.Photo).NotEmpty().Length(1, 400);

                RuleFor(x => x.PhotoPreview).NotEmpty().Length(1, 400);
            }
        }
    }
}
