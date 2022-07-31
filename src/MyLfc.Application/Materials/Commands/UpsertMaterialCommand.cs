using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MyLfc.Application.Materials.Commands;

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

    public abstract class Handler
    {
        public readonly ILiverpoolContext _context;

        protected Handler(ILiverpoolContext context)
        {
            _context = context;
        }

        public Task<string> GetUserName(int userId, CancellationToken cancellationToken)
        {
            return _context.Users.AsNoTracking()
                .Where(x => x.Id == userId)
                .Select(x => x.UserName)
                .FirstOrDefaultAsync(cancellationToken);                    
        }

        public Task<string> GetCategoryName(int categoryId, CancellationToken cancellationToken)
        {
            return _context.MaterialCategories.AsNoTracking()
                .Where(x => x.Id == categoryId)
                .Select(x => x.Name)
                .FirstOrDefaultAsync(cancellationToken);
        }

    }

}
