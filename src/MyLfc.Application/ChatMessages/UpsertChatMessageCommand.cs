using System;
using FluentValidation;

namespace MyLfc.Application.ChatMessages
{
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
}
