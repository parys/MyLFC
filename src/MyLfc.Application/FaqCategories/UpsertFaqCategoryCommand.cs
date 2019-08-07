using FluentValidation;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.FaqCategories
{
    public class UpsertFaqCategoryCommand
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
