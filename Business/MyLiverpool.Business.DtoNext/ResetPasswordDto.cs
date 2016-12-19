using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.DtoNext
{
    public class ResetPasswordDto : IDto
    {
        [Required(AllowEmptyStrings = false)]
        public string Code { get; set; }

        [Required(AllowEmptyStrings = false)]
        [EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password")]//, ErrorMessageResourceType = typeof (CommonMessages), ErrorMessageResourceName = "PasswordsNotMatch")]
        public string ConfirmPassword { get; set; }
    }
}
