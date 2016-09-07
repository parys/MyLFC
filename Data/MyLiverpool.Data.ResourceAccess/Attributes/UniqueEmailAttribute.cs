using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace MyLiverpool.Data.ResourceAccess.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class UniqueEmailAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            using (var db = LiverpoolContext.Create())
            {
                var user = db.Users.FirstOrDefault(x => x.Email == (string)value);
                return user == null ? ValidationResult.Success : new ValidationResult("User with same email already exists.");
            }
        }
    }
}
