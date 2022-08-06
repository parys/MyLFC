﻿using FluentValidation;

namespace MyLfc.Application.Features.Polls.Commands;

public class UpsertPollCommand
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
