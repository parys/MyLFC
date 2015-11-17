using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Business.ViewModels.Resources;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress]
        [Display(ResourceType = typeof (UsersMessages), Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName ="MinimumLength", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(ResourceType = typeof(UsersMessages), Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(ResourceType = typeof(UsersMessages), Name = "PasswordConfirmation")]
        [Compare("Password", ErrorMessageResourceType = typeof (ErrorMessages), ErrorMessageResourceName = "PasswordsNotMatch")]
        public string ConfirmPassword { get; set; }

        [Required]
        [Display(ResourceType = typeof(UsersMessages), Name = "Login")]
        public string Login { get; set; }

        [Display(ResourceType = typeof (UsersMessages), Name = "FullName")]
        public string FullName { get; set; }

        [Required]
        [Display(ResourceType = typeof (UsersMessages), Name = "BirthDay")]
        public DateTime BirthDay { get; set; }
    }
}
