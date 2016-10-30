using System;
using System.ComponentModel.DataAnnotations;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Business.DtoNext
{
    public class RegisterUserDto : IDto
    {
        [Required]//(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
        [EmailAddress]
     //todo   [UniqueEmail]
      //  [Display(ResourceType = typeof(UsersMessages), Name = "Email")] 
        public string Email { get; set; }

        [Required]//(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
        [StringLength(100)]//, ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "MinimumLength", MinimumLength = 6)]
        [DataType(DataType.Password, ErrorMessage = "")]
     //   [Display(ResourceType = typeof(UsersMessages), Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
     //   [Display(ResourceType = typeof(UsersMessages), Name = "PasswordConfirmation")]
        [Compare("Password")]//, ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "PasswordsNotMatch")]
        public string ConfirmPassword { get; set; }
        
        [Required]//(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
     //   [UniqueUserName]
        [MinLength(3)]
        [MaxLength(30)]
      //  [Display(ResourceType = typeof(UsersMessages), Name = "UserName")]
        public string UserName { get; set; }

  //      [Display(ResourceType = typeof(UsersMessages), Name = "FullName")]
        public string FullName { get; set; }

        [Required]//(ErrorMessageResourceType = typeof(ErrorMessages), ErrorMessageResourceName = "Required")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
      //  [Display(ResourceType = typeof(UsersMessages), Name = "BirthDay")]
        public DateTime Birthday { get; set; }
    }
}
