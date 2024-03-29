﻿using FluentValidation;

namespace MyLfc.Application.Features.Comments.Commands;

public class UpsertCommentCommand
{
    public abstract class Request
    {
        public string Answer { get; set; }

        public string Message { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {

        }
    }
}
