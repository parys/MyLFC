﻿using FluentValidation;

namespace MyLfc.Application.Features.MaterialCategories.Commands;

public class UpsertMaterialCategoryCommand
{
    public abstract class Request
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }


    public abstract class Validator<T> : AbstractValidator<T> where T : Request
    {
        protected Validator()
        {

        }
    }
}
