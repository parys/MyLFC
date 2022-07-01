﻿using System;
using System.Collections.Generic;
using System.Linq;
using FluentValidation.Results;

namespace MyLfc.Application.Infrastructure.Exceptions
{
    public class ValidationException : Exception
    {
        public IDictionary<string, string[]> Failures { get; } = new Dictionary<string, string[]>();

        public ValidationException(string propertyName, string errorMessage) : base("One or more validation failures have occurred.")
        {
            Failures.Add(propertyName, new string[] { errorMessage });
        }

        public ValidationException(ValidationFailure failure) : base("One or more validation failures have occurred.")
        {
            Failures.Add(failure.PropertyName, new string[] { failure.ErrorMessage });
        }

            public ValidationException(List<ValidationFailure> failures) : base("One or more validation failures have occurred.")
        {
            var propertyNames = failures
                .Select(e => e.PropertyName)
                .Distinct();

            foreach (var propertyName in propertyNames)
            {
                var propertyFailures = failures
                    .Where(e => e.PropertyName == propertyName)
                    .Select(e => e.ErrorMessage)
                    .ToArray();

                Failures.Add(propertyName, propertyFailures);
            }

        }
    }
}
