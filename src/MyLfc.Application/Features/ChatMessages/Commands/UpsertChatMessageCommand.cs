using FluentValidation;

namespace MyLfc.Application.Features.ChatMessages.Commands;

public class UpsertChatMessageCommand
{
    public abstract class Request
    {
        public string Message { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {

        }
    }
}
