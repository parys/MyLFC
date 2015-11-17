using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpool.Helpers
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class Unique : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            using (var db = new LiverpoolContext())
            {
                var user = db.Users.FirstOrDefault(x => x.UserName == (string)value);
                return user == null ? ValidationResult.Success : new ValidationResult("");
            }
        }
    }
}