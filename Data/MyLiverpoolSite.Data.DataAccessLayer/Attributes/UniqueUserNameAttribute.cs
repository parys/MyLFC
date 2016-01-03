using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace MyLiverpoolSite.Data.DataAccessLayer.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class UniqueUserName : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            using (var db = new LiverpoolContext())
            {
                var user = db.Users.FirstOrDefault(x => x.UserName == (string)value);
                return user == null ? ValidationResult.Success : new ValidationResult("User with same userName already exists.");
            }
        }
    }
}