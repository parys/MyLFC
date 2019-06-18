using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
{
    public class ChangePasswordDto : IDto
    {
        [Required]
        [DataType(DataType.Password)]
        public string OldPassword { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Compare("NewPassword")]//, ErrorMessageResourceType = typeof(CommonMessages), ErrorMessageResourceName = "PasswordsNotMatch")]
        public string ConfirmPassword { get; set; }
    }
}
